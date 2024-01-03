import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    opacity: 1,
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    opacity: 0,
  },
};

const variants2 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const SOCIAL_LIST = [
  {
    title: "instagram",
  },
  {
    title: "facebook",
  },
  {
    title: "linkdin",
  },
  {
    title: "twitter",
  },
];

function MenuList({ children }: any) {
  return (
    <motion.nav
      className="md:object-none md:hidden  right-0 bg-primary h-screen z-10 top-0 w-[70%] pl-5 pr-5 flex flex-col justify-center dark:bg-white fixed"
      variants={{
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
      }}
    >
      <motion.ul
        className="w-full flex flex-col items-center"
        variants={variants}
      >
        {children}
      </motion.ul>

      <motion.ul
        variants={variants}
        className="flex justify-around cursor-pointer"
      >
        {SOCIAL_LIST.map((i) => (
          <motion.li
            variants={variants2}
            whileHover={{ scale: 1.1 }}
            className="text-slate-50 text-[12px] uppercase dark:text-slate-800"
          >
            {i.title}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}

export default MenuList;
