import React from "react";
import { motion } from "framer-motion";
import { SlideRight } from "../utility/animation";
import { Link } from "react-scroll";
import Carousel from "../components/Carousel"; // Adjust the path as needed
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";
import slide6 from "../assets/slide6.jpg";
import slide7 from "../assets/slide7.jpg";
import slide8 from "../assets/slide8.jpg";
import slide9 from "../assets/slide9.jpg";
import slide10 from "../assets/slide10.jpg";

const Hero = () => {
  // Sample images array to be displayed in the carousel
  const slides = [
    slide2,
    slide3,
    slide4,
    slide5,
    slide1,
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
  ];

  return (
    <>
      <section
        id="hero"
        className="relative min-h-[650px] mt-10 md:mt-0 flex items-center justify-center overflow-hidden bg-transparent"
        style={{ backgroundColor: "transparent" }}
      >
        <div className="absolute inset-0 z-0 w-full h-full">
          <Carousel images={slides} />
        </div>

        <div className="absolute inset-0 z-5 opacity-70"></div>
        <div className="px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="relative z-10  container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 text-white">
            <div className="flex flex-col justify-center py-14 md:py-0 space-y-6">
              <motion.h1
                variants={SlideRight(0.6)}
                initial="hidden"
                animate="visible"
                className="text-4xl -mt-8 md:mt-8 lg:text-5xl font-bold leading-relaxed xl:leading-normal drop-shadow-2xl"
              >
                iCatchball:
                <br />
                <span className="text-white">Stronger</span>
                <span className="text-primary"> Together,</span>
                <br />
                <span className="text-white"> Better</span>
                <span className="text-primary"> Everyday</span>
              </motion.h1>
              <motion.p
                variants={SlideRight(1.2)}
                initial="hidden"
                animate="visible"
                className="text-white xl:max-w-[500px] drop-shadow-xl"
              >
                Join a community where women come together to play, laugh, and
                stay fit. Our catchball league is all about building strength,
                boosting health, and having a blast on and off the court!
              </motion.p>
              <motion.div
                variants={SlideRight(1.5)}
                initial="hidden"
                animate="visible"
                className="flex justify-start items-center gap-8"
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
                  <button className="primary-btn flex drop-shadow-xl items-center gap-2">
                    Join Us
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
