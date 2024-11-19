"use client";
import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Image from "next/image";

const resources = [
  {
    id: 1,
    name: "LinkedIn",
    designation: "Keeping it classy",
    image: "https://cdn-icons-png.flaticon.com/256/3536/3536505.png",
    href: "https://www.linkedin.com/in/misha-burnayev/"
  },
  {
    id: 2,
    name: "GitHub",
    designation: "Yeah, I code a little",
    image: "https://cdn-icons-png.flaticon.com/256/733/733609.png",
    href: "https://github.com/mburnayev"
  },
  {
    id: 3,
    name: "Discord",
    designation: "Q&A opens after 5pm",
    image: "https://cdn-icons-png.flaticon.com/256/5968/5968756.png",
    href: "https://discordapp.com/users/228204911098200064"
  },
  {
    id: 4,
    name: "Email",
    designation: "Infiltrate my inbox",
    image: "https://cdn-icons-png.flaticon.com/256/5968/5968534.png",
    href: "mailto:misha@burnayev.com"
  }
];

export default function Home() {
  return (
    // <BackgroundGradientAnimation>
    <div className="mx-auto flex min-h-screen flex-row-reverse">
      {/* Sidebar */}
      <div className="w-[20%] flex flex-col items-center pt-8 border-l fixed h-full">
        <div className="mb-[50%]">
          <Image
            src="/images/temp.png"
            alt="Next.js logo"
            width={200}
            height={200}
            priority
            className="dark:invert"
          />
        </div>

        <div className="flex flex-col items-center mb-[50%] w-full">
          <nav className="flex flex-col items-center">
            <a href="#bigHello" className="text-xl md:text-2xl hover:underline mb-4">Home</a>
            <a href="#work" className="text-xl md:text-2xl hover:underline mb-4">Work</a>
            <a href="#projects" className="text-xl md:text-2xl hover:underline mb-4">Projects</a>
            <a href="#Resume" className="text-xl md:text-2xl hover:underline mb-4">Resume</a>
          </nav>
        </div>

        <div>
          <AnimatedTooltip items={resources} />
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ml-[10%] mr-[30%]">
          <h1 className="text-8xl font-bold font-[family-name:var(--font-magic-bubble)]" id="bigHello">Hello </h1>
          <p className="text-2xl">
            I'm Misha Burnayev, a philomath by heart, a software engineer by trade, and an <i>excellent</i> hire for any Software Engineering, Machine Learning, or related roles this coming summer of 2025.<br></br><br></br>
            I love learning, picking up new hobbies, and creating projects when I see opportunities to apply my knowledge. Out of my many interests, I like programming the most since it's an excellent medium for efficiently bringing ideas to life and at the end of development, I feel like I've created an extension of myself.<br></br><br></br>
            I currently hold a bachelor's degree in Computer Science, a minor in Data Science, and I'm a first year master's student at George Mason University studying Software Engineering. I'm usually preoccupied with my schoolwork, but most of my free time goes to developing passion projects or practicing/performing my hobbies.
          </p>
          <h6 className="w-full border-t border-gray-300" id="work" />
          <p className="text-2xl">
            ST Engineering iDirect
            Software Engineering Intern	 May 2024 - August 2024
            Lorem Ipsum

            George Mason University
            Undergraduate Research Assistant					May 2022 - May 2023
            Lorem Ipsum

            George Mason University
            Undergraduate Teaching Assistant, Data Science			August 2022 - July 2024
            Undergraduate Teaching Assistant, Computer Science	August 2021 - December 2023
            Lorem Ipsum
          </p>
          <h6 className="w-full border-t border-gray-300" id="projects" />
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <h6 className="w-full border-t border-gray-300" id="Resume" />
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </main>

        {/* Footer */}
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
        </footer>

      </div>
    </div>
    // </BackgroundGradientAnimation>
  );
}
