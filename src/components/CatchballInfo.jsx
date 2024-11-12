import React, { useRef } from "react";
import { RiMentalHealthFill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaDumbbell } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import { SlideLeft } from "../utility/animation";

const CatchballInfoData = [
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

const CatchballInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <div ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-4 p-6">
            <h1 className="text-3xl md:text-4xl font-bold">
              Why play catchball?
            </h1>
            <p className="text-gray-500">
              Catchball is the perfect sport for beginners eager to embrace a
              new challenge, offering numerous benefits that make it a fantastic
              choice.
            </p>
          </div>
          {CatchballInfoData.map((item) => {
            return (
              <motion.div
                key={item.id}
                variants={SlideLeft(item.delay)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-4 p-6 bg-primary hover:bg-[#f9c5d1] rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
              >
                <div className="text-4xl text-white">{item.icon}</div>
                <p className="text-2xl text-white font-semibold">
                  {item.title}
                </p>
                <p className="text-white">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CatchballInfo;
