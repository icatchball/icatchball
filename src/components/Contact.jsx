import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SlideRight } from "../utility/animation";
import groupAbout3 from "../assets/groupAbout3.jpg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { once: true, threshold: 0.2 }); // Trigger when 20% in view

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Donna",
          from_email: form.email,
          to_email: "icatchballwebsite@gmail.com",
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div ref={contactRef}>
      <div
        id="contact"
        className="p-12 mt-14 md:mt-28 flex justify-around flex-col-reverse xl:flex-row gap-10 items-center justify-center text-center xl:text-left overflow-hidden mx-auto bg-[#D01E6D] min-h-screen"
      >
        <motion.div
          variants={SlideRight(0.4)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex-[0.75] bg-white p-8 rounded-2xl shadow-lg w-full max-w-[600px]"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 text-left"
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
                required
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
                required
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
                required
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
          animate={isInView ? "visible" : "hidden"}
          className="flex mb-0 md:mb-6 flex-col items-center xl:items-start text-center xl:text-left"
        >
          <h1 className="text-5xl drop-shadow-lg lg:text-6xl text-white font-bold leading-relaxed xl:leading-normal">
            Join Us!
          </h1>
          <p className="xl:max-w-[450px] drop-shadow-lg text-white">
            Please send us a message or call us at <br />
            <a className="font-bold" href="tel:+13102906397">
              +1 (310)-290-6397
            </a>{" "}
            with any inquiries and we will get back to you as soon as possible!
          </p>

          <div
            className="blob flex hidden lg:block w-80 h-80 mt-6 md:w-96 md:h-96 bg-cover bg-center"
            style={{ backgroundImage: `url(${groupAbout3})` }}
          ></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
