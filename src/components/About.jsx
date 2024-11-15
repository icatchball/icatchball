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
      className="mt-14 md:mt-28 flex flex-col items-center gap-10 px-6 md:px-16"
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-screen-lg gap-10">
        <div className="flex-1 flex justify-center">
          <div
            className="blob w-80 h-80 md:w-96 md:h-96 bg-cover bg-center"
            style={{ backgroundImage: `url(${groupAbout})` }}
          ></div>
        </div>

        <div className="flex justify-center">
          <hr className="hidden md:block w-1 h-80 bg-primary" />
        </div>

        <div className="flex-1 max-w-lg flex flex-col space-y-4 text-center md:text-left">
          <h1 className="text-3xl drop-shadow-md md:text-4xl font-bold text-primary">
            Who are we?
          </h1>
          <p className="text-gray-500 drop-shadow leading-relaxed text-sm md:text-base">
            iCatchball was established as a non-profit organization, dedicated
            to developing, supporting, and promoting local Catchball teams,
            leagues, tournaments, and other activities nationwide with USA
            CATCHBALL Association. Operated by a group of volunteers, our goal
            is to have competitive women’s leagues in Southern California by
            recruiting, training, and supporting players at different skill
            levels, continually growing across Southern CA counties, regionals,
            and competing nationally and internationally.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
