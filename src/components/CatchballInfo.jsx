import React from "react";
import { motion, useInView } from "framer-motion";

export const SlideUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};

const CatchballInfoData = [
  {
    id: 1,
    title: "The History",
    desc: "Catchball began in Israel in the early 2000s as a modified version of volleyball, aimed at creating an accessible team sport for women. It quickly gained popularity, evolving into an organized sport with leagues and competitions, and has since spread internationally.",
    delay: 0.3,
  },
  {
    id: 2,
    title: "The Basics",
    desc: "In catchball, teams of six players aim to score by throwing the ball over a net, where the opposing team must catch it. Players can hold the ball for up to three seconds and make up to three passes before returning it. Sets are played to 25 points, and matches follow volleyball-style scoring.",
    delay: 0.6,
  },
  {
    id: 3,
    title: "The Difference",
    desc: "The main difference between catchball and volleyball is that, in catchball, players catch and throw the ball rather than hitting it. This makes the game slower-paced and easier to control. Additionally, players can hold the ball for a few seconds before passing, while in volleyball, the ball must be struck immediately.",
    delay: 0.9,
  },
];

const CatchballInfo = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <div className="mt-14 md:mt-28 flex justify-center items-center flex-col px-4">
      <div
        ref={ref}
        className="w-full max-w-screen-lg border-x-4 border-primary px-4 md:px-8 lg:px-12 py-8"
      >
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl drop-shadow-md text-primary md:text-4xl font-bold">
              Learn more about Catchball
            </h1>
            <p className="text-gray-500 drop-shadow">
              Explore the origins, basics, and unique aspects that set Catchball
              apart.
            </p>
          </div>
          <div className="flex flex-col items-center gap-6">
            {CatchballInfoData.map((item) => (
              <motion.div
                key={item.id}
                variants={SlideUp(item.delay)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="w-full max-w-md text-center space-y-4 p-6 bg-primary rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
              >
                <p className="text-2xl drop-shadow-lg text-white font-semibold">
                  {item.title}
                </p>
                <p className="text-white drop-shadow-lg leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatchballInfo;
