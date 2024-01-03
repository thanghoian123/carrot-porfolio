import React, { useContext, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRightIcon,
  BugAntIcon,
  CogIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import CircleText from "../../components/CircleText";
import { MouseContext } from "../../contexts/MouseProvider";
import ScrollTrigger from "../../components/ScrollTrigger";

function HomePage() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const { handleMouseIn, handleMouseOut } = useContext(MouseContext);

  // const toggleDarkMode = () => {
  //   if (!isDarkMode) {
  //     document.documentElement.classList.add("dark");
  //     setIsDarkMode(true);
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     setIsDarkMode(false);
  //   }
  // };
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const onExitViewport  = () => {
    document.documentElement.classList.add("dark");
    setIsDarkMode(true);
  };
  const onEnterViewport = () => {
    document.documentElement.classList.remove("dark");
    setIsDarkMode(false);
  };

  return (
    <div className="w-[100vw] dark:bg-slate-950 relative">
      <CircleText />
      <section className="h-[100vh]">
        <motion.div className="inline-flex flex-col items-center justify-center w-full ">
          <motion.p
            className="font-medium text-[5.7vw] items-center m-auto inline-flex dark:text-white"
            initial={{ y: "-50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={handleMouseIn}
            onMouseLeave={handleMouseOut}
          >
            <img src="" />
            CREATIVITY
            <motion.span className="w-[5.7vw]">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-[5.7vw]"
              >
                <CogIcon />
              </motion.div>
            </motion.span>
            MEET
          </motion.p>
          <motion.p
            className="font-medium text-[5.7vw] inline-flex items-center dark:text-white"
            initial={{ x: "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            WITH
            <motion.span
              className="w-[5.7vw] overflow-hidden"
              transition={{ duration: 1, repeat: Infinity }}
            >
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: 50 }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-[5.7vw]"
              >
                <ArrowRightIcon />
              </motion.div>
            </motion.span>
            FUNCTIONALITY
          </motion.p>

          <motion.p
            className="font-medium text-[5.7vw] inline-flex items-center dark:text-white"
            initial={{ x: "50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="w-[5.7vw]"
              transition={{ duration: 1, repeat: Infinity }}
            >
              <motion.div
                animate={{
                  rotate: [90, 90, 270, 270, 270],
                  x: [0, 30, 50, 30, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 0,
                }}
                className="w-[5.7vw]"
              >
                <BugAntIcon />
              </motion.div>
            </motion.span>
          </motion.p>

          <motion.p
            className="font-medium text-[5.7vw] items-center m-auto inline-flex dark:text-white"
            initial={{ x: "50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A WORDPRESS
            <motion.span className="w-[5.7vw]">
              <motion.div
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.7, repeat: Infinity }}
                className="w-[5.7vw]"
              >
                <HeartIcon />
              </motion.div>
            </motion.span>
            THEME FOR
          </motion.p>
          <motion.p
            className="font-medium text-[5.7vw] items-center m-auto inline-flex dark:text-white"
            initial={{ y: "50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            ALL CREATIVE PEOPLE.
          </motion.p>
        </motion.div>
      </section>

      <ScrollTrigger
        onEnterViewport={onEnterViewport}
        onExitViewport={onExitViewport}
      >
        <section className="h-[100vh]"></section>
        {/* <div className={`container ${visible ? "container-animate" : ""}`} /> */}
      </ScrollTrigger>
    </div>
  );
}

export default HomePage;
