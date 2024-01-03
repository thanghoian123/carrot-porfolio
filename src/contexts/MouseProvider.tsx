import React, { createContext, useContext, useEffect, useState } from "react";

interface IMouseContext {
  mouseVariant?: any;
  mousePos?: any;
  mouseKeyAnimate: string;
  handleMouseIn: () => void;
  handleMouseOut: () => void;
}
export const MouseContext = createContext<IMouseContext>({
  mouseVariant: {},
  mousePos: {},
  mouseKeyAnimate: "",
  handleMouseIn: () => {},
  handleMouseOut: () => {},
});

interface IChild {
  children: JSX.Element;
}

export const MouseProvider = ({ children }: IChild) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouseKeyAnimate, setMouseKeyAnimate] = useState("");
  const isDarkMode = document.querySelector("html")?.classList.contains("dark");
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePos({ x: clientX, y: clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseIn = () => {
    setMouseKeyAnimate("text");
  };
  const handleMouseOut = () => {
    setMouseKeyAnimate("default");
  };

  const mouseVariant = {
    default: {
      x: mousePos.x - 16,
      y: mousePos.y - 16,
      transition: {
        duration: 0.3,
      },
    },
    text: {
      width: "150px",
      height: "150px",
      x: mousePos.x - 72,
      y: mousePos.y - 72,
      background: isDarkMode ? "#fff" : "transparent",
      border: "1px solid black",
      mixBlendMode: "difference",
    },
  };

  return (
    <MouseContext.Provider
      value={{
        mousePos,
        mouseVariant,
        mouseKeyAnimate,
        handleMouseIn,
        handleMouseOut,
      }}
    >
      {children}
    </MouseContext.Provider>
  );
};
