"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Image from "next/image";

const tooltipLinks = [
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

const workCards = [
  {
    title: "Software Engineering Intern @ ST Engineering iDirect",
    subtext: "May 2024 - August 2024",
    description: "Lorem Ipsum",
    link: "https://www.idirect.net/"
  },
  {
    title: "Undergraduate Research Assistant @ George Mason University",
    subtext: "May 2022 - May 2023",
    description: "Lorem Ipsum",
    link: "https://sparx.vse.gmu.edu/"
  },
  {
    title: "DS Undergraduate Teaching Assistant @ George Mason University",
    subtext: "August 2022 - July 2024",
    description: "Lorem Ipsum",
    link: "https://science.gmu.edu/academics/departments-units/computational-data-sciences"
  },
  {
    title: "CS Undergraduate Teaching Assistant @ George Mason University",
    subtext: "August 2021 - December 2023",
    description: "Lorem Ipsum",
    link: "https://cs.gmu.edu/"
  },
]

const projectCards = [
  {
    title: "CatFinderinator3000",
    subtext: "Lorem Ipsum",
    description: "Lorem Ipsum",
    link: "https://github.com/mburnayev/CatFinderinator3000"
  },
  {
    title: "IFGDB",
    subtext: "Lorem Ipsum",
    description: "Lorem Ipsum",
    link: "https://github.com/mburnayev/IFGDBot"
  },
  {
    title: "This website",
    subtext: "Lorem Ipsum",
    description: "Lorem Ipsum",
    link: "https://github.com/mburnayev/mb_website"
  },
]

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen flex-row-reverse">
      {/* Sidebar */}
      <div className="w-[20%] flex flex-col items-center pt-8 fixed h-full">
        <div className="mb-[50%]">
          <Image
            src="/images/pic.png"
            alt="I'm walkin' here!"
            width={200}
            height={200}
            priority
            className="dark:invert"
          />
        </div>

        <div className="flex flex-col items-center mb-[50%] w-full">
          <nav className="flex flex-col items-center">
            <a href="#about" className="text-xl md:text-2xl hover:underline mb-4">Home</a>
            <a href="#work" className="text-xl md:text-2xl hover:underline mb-4">Work</a>
            <a href="#projects" className="text-xl md:text-2xl hover:underline mb-4">Projects</a>
            <a href="#Resume" className="text-xl md:text-2xl hover:underline mb-4">Resume</a>
          </nav>
        </div>

        <div>
          <AnimatedTooltip items={tooltipLinks} />
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ml-[10%] mr-[30%]">
          <h1 id="about"></h1>
          <h1 className="text-8xl font-bold font-[family-name:var(--font-magic-bubble)]">Hello</h1>
          <p className="text-2xl">
            I'm Misha Burnayev, a philomath by heart, a software engineer by trade, and an <i>excellent</i> hire for any Software Engineering, Machine Learning, or related roles this coming summer of 2025.<br></br><br></br>
            I love learning, picking up new hobbies, and creating projects when I see opportunities to apply my knowledge. Out of my many interests, I like programming the most since it's an excellent medium for efficiently bringing ideas to life and at the end of development, I feel like I've created an extension of myself.<br></br><br></br>
            I currently hold a bachelor's degree in Computer Science, a minor in Data Science, and I'm a first year master's student at George Mason University studying Software Engineering. I'm usually preoccupied with my schoolwork, but most of my free time goes to developing passion projects or practicing/performing my hobbies.
          </p>
          <h6 className="w-full border-t border-gray-300" id="work" />
          <HoverEffect className="mx-auto" items={workCards} />
          <h6 className="w-full border-t border-gray-300" id="projects" />
          <HoverEffect className="mx-auto" items={projectCards} />
          <h6 className="w-full border-t border-gray-300" id="Resume" />
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </main>

        {/* Footer */}
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <p>Built with Next.js and Tailwind CSS, to be deployed on Firebase</p>
        </footer>

      </div>
    </div>
  );
}
