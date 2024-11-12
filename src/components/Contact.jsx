import React, { useRef, useState } from "react";

import { SlideRight } from "../utility/animation";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactRef = useRef(null); // Reference for the entire component
  const isInView = useInView(contactRef, { once: true, threshold: 0.2 }); // Trigger when 20% in view

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Placeholder for email sending functionality with emailjs, to be added later
    /*
    emailjs
      .send(
        'service_8ap6hya',
        'template_2e65hhh',
        {
          from_name: form.name,
          to_name: 'Shayan',
          from_email: form.email,
          to_email: 'valaieshayanse@gmail.com',
          message: form.message,
        },
        '3Q63r0ES5OylojtvS'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert('Ahh, something went wrong. Please try again.');
        }
      );
    */
  };

  return (
    <div ref={contactRef}>
      {isInView && (
        <div
          id="contact"
          className="-mx-4 md:-mx-8 p-12 lg:-mx-16 xl:-mx-24 mt-14 md:mt-28 flex items-center justify-between xl:flex-row flex-col-reverse gap-10 overflow-hidden bg-[#D01E6D]"
        >
          <motion.div
            variants={SlideRight(0.4)}
            initial="hidden"
            animate="visible"
            className="flex-[0.75] bg-white p-8 rounded-2xl shadow-lg w-full max-w-[600px] mx-auto"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >
              <label className="flex flex-col">
                <span className="mb-2 font-semibold text-[#D01E6D]">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="bg-gray-100 py-3 px-5 rounded-lg outline-none placeholder-[#D01E6D] text-[#D01E6D] font-medium border border-[#D01E6D]"
                />
              </label>
              <label className="flex flex-col">
                <span className="mb-2 font-semibold text-[#D01E6D]">
                  Your Email Address
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="bg-gray-100 py-3 px-5 rounded-lg outline-none placeholder-[#D01E6D] text-[#D01E6D] font-medium border border-[#D01E6D]"
                />
              </label>
              <label className="flex flex-col">
                <span className="mb-2 font-semibold text-[#D01E6D]">
                  Your Message
                </span>
                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Type your message"
                  className="bg-gray-100 py-3 px-5 rounded-lg outline-none placeholder-[#D01E6D] text-[#D01E6D] font-medium border border-[#D01E6D]"
                />
              </label>

              <button
                type="submit"
                className="bg-[#D01E6D] py-3 px-8 rounded-lg font-bold text-white hover:bg-[#c2185b] transition-colors"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </motion.div>

          <motion.div
            variants={SlideRight(0.6)}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl lg:text-6xl text-white font-bold leading-relaxed xl:leading-normal">
              Join Us!
            </h1>
            <p className="xl:max-w-[500px] text-white">
              Please send us a message with any inquiries and we will get back
              to you as soon as possible!
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Contact;
