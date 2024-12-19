"use client";
import React, { useState } from "react";

import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
    href: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };

  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  const handleTooltipClick = (href: string) => {
    window.open(href, "_blank");
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="-mr-4 lg:-mr-0 lg:mb-1 relative group mx-7 lg:mx-0 lg:my-2"
          key={item.name}
          onMouseEnter={() => {setHoveredIndex(item.id)}}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{ opacity: 0, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  x: "calc(6vw + 5px)",
                  y: "calc(3vw + 0px)",
                }}
                className="absolute hidden lg:flex -top-16 -left-1/2 translate-x-1/2 text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2 break-words"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-white relative z-30 text-base text-center">
                  {item.name}
                </div>
                <div className="text-white text-xs text-center">
                  {item.designation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div
            className="relative"
            onClick={() => handleTooltipClick(item.href)}
          >
            <img
              onMouseMove={handleMouseMove}
              height="100"
              width="100"
              src={item.image}
              alt={item.name}
              className="!m-0 !p-0 rounded-full h-8 w-8 lg:h-[3.5vw] lg:w-[3.5vw] group-hover:z-30 relative transition duration-500 object-contain"
            />
          </div>
        </div>
      ))}
    </>
  );
};
