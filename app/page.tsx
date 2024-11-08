"use client";
import React from "react";
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
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-[300px] bg-gray-100 dark:bg-gray-800 flex flex-col items-center pt-8 border-r border-gray-200 dark:border-gray-700">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={60}
          height={60}
          priority
          className="dark:invert"
        />
        <div className="flex flex-col items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={resources} />
        </div>
      </div>

      <div className="flex-1 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                app/page.tsx
              </code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
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
  );
}
