import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const variants = {
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

function MenuItem(props: any) {
  const { item, isMatched } = props;
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      className={`pt-5 pb-5 cursor-pointer ${
        isMatched && "scale-110"
      }`}
    >
      <Link
        to={item.path}
        className="rounded-md text-4xl uppercase text-white  dark:text-slate-800"
      >
        {item.text}
      </Link>
    </motion.li>
  );
}

export default MenuItem;
