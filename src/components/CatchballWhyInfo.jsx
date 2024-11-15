import React, { useRef } from "react";
import { RiMentalHealthFill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaDumbbell } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import { SlideLeft } from "../utility/animation";

const CatchballWhyInfoData = [
  {
    id: 1,
    title: "Full-Body Workout",
    desc: "Engage every muscle as you move, jump, and throw, boosting strength and endurance with each game.",
    icon: <FaDumbbell />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Stress Relief",
    desc: "Leave your worries at the door—catchball is a great way to unwind, release tension, and boost your mood.",
    icon: <RiMentalHealthFill />,
    link: "/",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Friendship & Community",
    desc: "Build lasting friendships and become part of a vibrant community of supportive women.",
    icon: <FaPeopleGroup />,
    link: "/",
    delay: 0.9,
  },
];

const CatchballWhyInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="bg-primary w-screen overflow-x-hidden md:mt-10 px-4 md:px-8 lg:px-16 xl:px-24 "
    >
      <div className="max-w-screen-xl mx-auto px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 py-6">
          <div className="space-y-4">
            <h1 className="text-3xl text-white md:text-4xl font-bold">
              Why play catchball?
            </h1>
            <p className="text-white">
              You want to have <b className="underline">FUN.</b> <br />
              You want to make <b className="underline">FRIENDS.</b> <br />
              You want to be <b className="underline">CHALLENGED.</b> <br />
              You love to play <b className="underline">SPORTS.</b> <br />
            </p>

            <hr className="border-t-4 border-white" />
            <p className="text-white">
              <b>Catchball</b> is a fun, recreational sport for women 25+, with
              options for both relaxed play and competitive challenges.
            </p>
          </div>
          {CatchballWhyInfoData.map((item) => {
            return (
              <motion.div
                key={item.id}
                variants={SlideLeft(item.delay)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-4 p-6  bg-white  rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
              >
                <div className="text-4xl drop-shadow text-primary">
                  {item.icon}
                </div>
                <p className="text-2xl drop-shadow text-primary font-semibold">
                  {item.title}
                </p>
                <p className="text-primary leading-relaxed text-sm md:text-base drop-shadow-sm">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CatchballWhyInfo;
