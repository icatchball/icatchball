import React from "react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { SlideRight } from "../utility/animation";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="container grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-16 min-h-[650px] relative"
      >
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0">
          <div className="text-center md:text-left space-y-6">
            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal"
            >
              iCatchball: Where <span className="text-primary">Health</span>{" "}
              Meets Fun!{" "}
            </motion.h1>
            <motion.p
              variants={SlideRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-gray-600 xl:max-w-[500px]"
            >
              Join a community where women come together to play, laugh, and
              stay fit. Our catchball league is all about building strength,
              boosting health, and having a blast on and off the court!
            </motion.p>
            <motion.div
              variants={SlideRight(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center items-center gap-8 md:justify-start !mt-4"
            >
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
                className="text-primary font-medium hover:text-[#f9c5d1]"
              >
                <button className="primary-btn flex items-center gap-2 mt-4">
                  Join Us
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
        {/* Brand Image */}

        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }} // Add this line to animate the image
            transition={{ duration: 1, delay: 1.8 }} // Optional: add delay to match other elements
            src={logo}
            alt="iCatchBall Logo"
            className="w-[350px] md:w-[500px] xl:w-[600px] mt-4 drop-shadow "
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
