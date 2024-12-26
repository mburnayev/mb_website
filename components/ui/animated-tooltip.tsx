"use client";
import React, { useState, useContext } from "react";
import confetti from "canvas-confetti";

import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FunkContext } from "@/contexts/FunkContext";

var sfxCounter = 0;

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
  const { isFunkEnabled: isAudioEnabled } = useContext(FunkContext);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [audioInitialized, setAudioInitialized] = useState(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const musicDict: { [key: number]: string } = {
    0: "/sfx/sfx_1.mp3",
    1: "/sfx/sfx_2.mp3",
    2: "/sfx/sfx_3.mp3",
    3: "/sfx/sfx_4.mp3",
    4: "/sfx/sfx_5.mp3",
    5: "/sfx/sfx_6.mp3",
    6: "/sfx/sfx_medium.mp3",
    7: "/sfx/sfx_big.mp3",
  }

  React.useEffect(() => {
    const enableAudio = () => {
      setAudioInitialized(true);
      document.removeEventListener('click', enableAudio);
    };
    document.addEventListener('click', enableAudio);
    return () => document.removeEventListener('click', enableAudio);
  }, []);

  const playSFX = () => {
    if (!audioInitialized || !isAudioEnabled) return;
    
    if (sfxCounter == 8) {
      sfxCounter = 0;
    }
    if (sfxCounter == 6) {
      confetti({
        particleCount: 100,
        spread: 100,
        startVelocity: 45,
        origin: { x: 0.55, y: 0.6 }
      });
    }
    else if (sfxCounter == 7) {
      for (let i = 0; i < 3; i++) {
        confetti({
          particleCount: 150,
          spread: 360,
          startVelocity: 100,
          origin: { x: 0.55, y: 0.4 }
        });
      }
    }
    var audio = new Audio(musicDict[sfxCounter % 8]);
    audio.play();
    sfxCounter += 1;
  }

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
          className="-mr-4 lg:-mr-0 lg:mb-1 relative group mx-7 lg:mx-0 lg:my-2 allow:autoplay"
          key={item.name}
          onMouseEnter={() => { setHoveredIndex(item.id), playSFX() }}
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
