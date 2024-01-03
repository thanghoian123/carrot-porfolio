import React, { useEffect, useRef } from "react";

function ScrollTrigger({ children, onEnterViewport, onExitViewport }: any) {
  const myRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries, _) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        onEnterViewport();
      } else {
        onExitViewport();
      }
    });

    observer.observe(myRef.current as any);
  }, []);
  return <div ref={myRef}>{children}</div>;
}

export default ScrollTrigger;
