import React from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  BugAntIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
function CircleText() {
  const { scrollY, scrollYProgress } = useScroll();
  const [rotationAngle, setRotationAngle] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollPosition = window.scrollY;

      // Adjust the rotation speed and direction based on your preference
      const rotationSpeed = 0.6; // Adjust this value to control the rotation speed
      const rotationDirection = -1; // 1 for clockwise, -1 for counterclockwise

      // Calculate the new rotation angle based on scroll position
      const newRotationAngle = scrollPosition * rotationSpeed * rotationDirection;

      // Update the rotation angle in the state
      setRotationAngle(newRotationAngle);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useMotionValueEvent(scrollY, "animationCancel", () => {
    console.log(
      "🚀 ~ file: index.tsx:15 ~ useMotionValueEvent ~ latest:",
      scrollY.get()
    );
  });

  return (
    <motion.div
      className="w-[130px] h-[130px] dark:bg-slate-950 rotate-45 rounded-full fixed bottom-8 right-6"
      initial={{ rotate: 0 }}
      animate={{ rotate: rotationAngle }}
      transition={{
        ease: "circInOut",
        duration: 4,
      }}
    >
      <div className="w-[21px] h-full  translate-x-[-50%] absolute left-[50%] top-0 flex items-center justify-center">
        <ArrowDownIcon className="dark:text-white" />
        <div
          className={`text-[10px] rotate-[0deg] absolute w-[21px] h-[50%] top-0 block origin-bottom dark:text-white`}
        >
          P
        </div>
        <div
          className={`text-[10px] rotate-[20deg] absolute w-[21px] h-[50%] top-0 block origin-bottom dark:text-white`}
        >
          U
        </div>
        <div
          className={`text-[10px] rotate-[40deg] absolute w-[21px] h-[50%] top-0 block origin-bottom dark:text-white`}
        >
          R
        </div>
        <div
          className={`text-[10px] rotate-[60deg] absolute w-[21px] h-[50%] top-0 block origin-bottom dark:text-white`}
        >
          C
        </div>
        <div
          className={`text-[10px] rotate-[80deg] absolute w-[21px] h-[50%] top-0 block origin-bottom dark:text-white`}
        >
          H
        </div>
        <div
          className={`text-[10px] rotate-[100deg] absolute w-[21px] h-[50%] top-0 block origin-bottom dark:text-white`}
        >
          A
        </div>
        <div
          className={`text-[10px] rotate-[120deg] absolute w-[21px] h-[50%] top-0 block origin-bottom dark:text-white`}
        >
          R
        </div>
        <div
          className={`text-[10px] rotate-[140deg] absolute w-[21px] h-[50%] top-0 block origin-bottom dark:text-white`}
        >
          S
        </div>
        <div
          className={`text-[10px] rotate-[160deg] absolute w-[21px] h-[50%] top-0 block origin-bottom dark:text-white`}
        >
          E
        </div>
        {/*  */}
        <div
          className={`text-[10px] rotate-[180deg] absolute w-[21px] h-[50%] top-0 block origin-bottom dark:text-white`}
        >
          .
        </div>
        <div
          className={`text-[10px] rotate-[200deg] absolute w-[21px] h-[50%] top-0 block origin-bottom dark:text-white`}
        >
          P
        </div>
        <div
          className={`text-[10px] rotate-[220deg] absolute w-[21px] h-[50%] top-0 block origin-bottom dark:text-white`}
        >
          U
        </div>
        <div
          className={`text-[10px] rotate-[240deg] absolute w-[21px] h-[50%] top-0 block origin-bottom dark:text-white`}
        >
          R
        </div>
        <div
          className={`text-[10px] rotate-[260deg] absolute w-[21px] h-[50%] top-0 block origin-bottom dark:text-white`}
        >
          C
        </div>
        <div
          className={`text-[10px] rotate-[280deg] absolute w-[21px] h-[50%] top-0 block origin-bottom dark:text-white`}
        >
          H
        </div>
        <div
          className={`text-[10px] rotate-[300deg] absolute w-[21px] h-[50%] top-0 block origin-bottom dark:text-white`}
        >
          A
        </div>
        <div
          className={`text-[10px] rotate-[320deg] absolute w-[21px] h-[50%] top-0 block origin-bottom dark:text-white`}
        >
          R
        </div>
        <div
          className={`text-[10px] rotate-[340deg] absolute w-[21px] h-[50%] top-0 block origin-bottom dark:text-white`}
        >
          .
        </div>
      </div>
    </motion.div>
  );
}

export default CircleText;
