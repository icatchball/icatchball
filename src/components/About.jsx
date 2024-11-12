import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import groupAbout from "../assets/groupAbout.jpg";
import { SlideUp } from "../utility/animation";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <motion.div
      id="about"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={SlideUp(0.3)}
      className="mt-14 md:mt-28 flex justify-center flex-col md:flex-row items-center gap-10 px-6 md:px-16"
    >
      <div
        className="blob w-80 h-80 md:w-96 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${groupAbout})` }}
      ></div>

      <div className="max-w-lg flex flex-col  space-y-4">
        <h1 className="text-3xl text-center md:text-left md:text-4xl font-bold text-black">
          Who are we?
        </h1>
        <p className="text-gray-500 leading-relaxed text-sm md:text-base">
          iCatchball is a non-profit organization dedicated to growing and
          supporting Catchball for women nationwide, in partnership with the USA
          Catchball Association. Run by passionate volunteers, our mission is to
          make Catchball accessible to all women, regardless of fitness level or
          background, following official Federation rules. With divisions from
          local to professional levels, our league offers opportunities for all
          skill levels. Our goal is to build competitive leagues across Southern
          California, supporting players to compete regionally, nationally, and
          internationally.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
