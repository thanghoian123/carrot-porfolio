import * as React from "react";
import { motion } from "framer-motion";

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

interface IMenuToggleProps {
  toggle: () => void;
  isToggle: boolean;
}

export const MenuToggle = ({ toggle, isToggle }: IMenuToggleProps) => (
  <button onClick={toggle} className="z-20 md:hidden">
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: {
            d: "M 3 16.5 L 17 2.5",
            stroke: isToggle ? "white" : "black",
          },
        }}
        className={`${
          !isToggle ? "dark:stroke-white" : "dark:stroke-slate-800"
        } ${
          isToggle ? "stroke-white" : "stroke-slate-800"
        }`}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
        className={`${
          !isToggle ? "dark:stroke-white" : "dark:stroke-slate-800"
        } ${
          isToggle ? "stroke-white" : "stroke-slate-800"
        }`}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: {
            d: "M 3 2.5 L 17 16.346",
            stroke: isToggle ? "white" : "black",
          },
        }}
        className={`${
          !isToggle ? "dark:stroke-white" : "dark:stroke-slate-800"
        } ${
          isToggle ? "stroke-white" : "stroke-slate-800"
        }`}
      />
    </svg>
  </button>
);
