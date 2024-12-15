"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Modal, ModalTrigger } from "@/components/ui/animated-modal";
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

const iDirectButtons = [
  {
    name: "C++",
    bgcolor: "#8BB6E4",
    txcolor: "#000000",
    icon: "/images/cpp_logo.png"
  },
  {
    name: "Git",
    bgcolor: "#FFA79A",
    txcolor: "#000000",
    icon: "/images/git_logo.png"
  },
  {
    name: "JavaScript",
    bgcolor: "#FFEF84",
    txcolor: "#000000",
    icon: "/images/javascript_logo.png"
  },
  {
    name: "Jenkins",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "/images/jenkins_logo.png"
  },
  {
    name: "Docker",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "/images/docker_logo.webp"
  }
]

const researchButtons = [
  {
    name: "C++",
    bgcolor: "#8BB6E4",
    txcolor: "#000000",
    icon: "/images/cpp_logo.png"
  },
  {
    name: "Python",
    bgcolor: "#A8A8A8",
    txcolor: "#000000",
    icon: "/images/python_logo.svg"
  },
  {
    name: "OpenMV",
    bgcolor: "#9cc4ed",
    txcolor: "#000000",
    icon: "/images/openmv_logo.png"
  },
  {
    name: "OpenCV",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "/images/opencv_logo.webp"
  }
]

const DSButtons = [
  {
    name: "Python",
    bgcolor: "#A8A8A8",
    txcolor: "#000000",
    icon: "/images/python_logo.svg"
  },
  {
    name: "R",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "/images/r_logo.png"
  }
]

const CSButtons = [
  {
    name: "Python",
    bgcolor: "#A8A8A8",
    txcolor: "#000000",
    icon: "/images/python_logo.svg"
  },
  {
    name: "Java",
    bgcolor: "#A8A8A8",
    txcolor: "#000000",
    icon: "/images/java_logo.png"
  },
  {
    name: "C",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "/images/c_logo.png"
  }
]

const CF3KButtons = [
  {
    name: "Dart",
    bgcolor: "#76F4E2",
    txcolor: "#000000",
    icon: "/images/dart_logo.png"
  },
  {
    name: "Flutter",
    bgcolor: "#B2E8FF",
    txcolor: "#000000",
    icon: "/images/flutter_logo.webp"
  },
  {
    name: "Python",
    bgcolor: "#A8A8A8",
    txcolor: "#000000",
    icon: "/images/python_logo.svg"
  },
  {
    name: "PyTorch",
    bgcolor: "#D5A9A0",
    txcolor: "#000000",
    icon: "/images/pytorch_logo.webp"
  },
  {
    name: "OpenCV",
    bgcolor: "#A8A8A8",
    txcolor: "#000000",
    icon: "/images/opencv_logo.webp"
  },
  {
    name: "Git",
    bgcolor: "#FFA79A",
    txcolor: "#000000",
    icon: "/images/git_logo.png"
  },
  {
    name: "Firebase",
    bgcolor: "#FFDC68",
    txcolor: "#000000",
    icon: "/images/firebase_logo.png"
  },
  {
    name: "Tensorflow",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "/images/tensorflow_logo.png"
  },
]

const websiteButtons = [
  {
    name: "Next.JS",
    bgcolor: "#888888",
    txcolor: "#000000",
    icon: "/images/nextjs_logo.webp"
  },
  {
    name: "TypeScript",
    bgcolor: "#73A5DD",
    txcolor: "#000000",
    icon: "/images/typescript_logo.png"
  },
  {
    name: "HTML",
    bgcolor: "#D5A9A0",
    txcolor: "#000000",
    icon: "/images/html_logo.webp"
  },
  {
    name: "Tailwind CSS",
    bgcolor: "#A2E3FF",
    txcolor: "#000000",
    icon: "/images/tailwind_logo.png"
  },
  {
    name: "Git",
    bgcolor: "#FFA79A",
    txcolor: "#000000",
    icon: "/images/git_logo.png"
  },
  {
    name: "Node.JS",
    bgcolor: "#CAE79D",
    txcolor: "#000000",
    icon: "/images/nodejs_logo.webp"
  },
  {
    name: "Firebase",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "/images/firebase_logo.png"
  },
  {
    name: "Nginx",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "/images/nginx_logo.webp"
  },
  {
    name: "OCI",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "/images/oci_logo.png"
  },
  {
    name: "GCP",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "/images/gcp_logo.png"
  }
]

const IFGDBButtons = [
  {
    name: "JavaScript",
    bgcolor: "#FFEF84",
    txcolor: "#000000",
    icon: "/images/javascript_logo.png"
  },
  {
    name: "Discord API",
    bgcolor: "#9DA5FF",
    txcolor: "#000000",
    icon: "/images/discord_logo.png"
  },
  {
    name: "Git",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "/images/git_logo.png"
  },
  {
    name: "Node.JS",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "/images/nodejs_logo.webp"
  }
]

const workCards = [
  {
    title: "Software Engineering Intern @ ST Engineering iDirect",
    subtext: "May 2024 - August 2024",
    description: "Co-developed and tested a C++ port of an important debugging script that retrieved many proprietary FPGA module statistics and integrated it into a larger command library.\n\nAfter the port, I revised a major product line's client-facing UI to permit DVB-S2X configurability and tied it to the provisioning service — the update was thouroughly tested and integrated into the product line.",
    link: "https://www.idirect.net/",
    skillIcons: iDirectButtons
  },
  {
    title: "Undergraduate Research Assistant @ George Mason University",
    subtext: "May 2022 - May 2023",
    description: "Co-developed a C++ socket program that livestreamed what remotely controlled blimps perceived to our ground control setup so we could monitor the performance of our team's YOLO object detector's performance.\n\nExperimented with models using Edge Impluse's FOMO object detection algorithm and independently developed light detection methods as alternative means to achieve object detection on autonomous agents with embedded systems.",
    link: "https://sparx.vse.gmu.edu/",
    skillIcons: researchButtons
  },
  {
    title: "DS Undergraduate Teaching Assistant @ George Mason University",
    subtext: "August 2022 - July 2024",
    description: "Handled in-person and remote instruction and assistance, and grading for CDS-102 and CDS-230.",
    link: "https://science.gmu.edu/academics/departments-units/computational-data-sciences",
    skillIcons: DSButtons
  },
  {
    title: "CS Undergraduate Teaching Assistant @ George Mason University",
    subtext: "August 2021 - December 2023",
    description: "Handled in-person and remote instruction and assistance, and grading for CS-112, CS-211, CS-262, and CS-306.",
    link: "https://cs.gmu.edu/",
    skillIcons: CSButtons
  },
]

const projectCards = [
  {
    title: "mburnayev-website",
    subtext: "November 2024 - December 2024",
    description: "*This* website — as you can probably tell, this primarily serves as a portfolio of my career experiences.\n\nDesigned with Next to use some of the pre-built components that looked cool, but I expanded the project scope to get the functionality I wanted as this project was made under a Google organization and Firebase changed their free tier policies.",
    link: "https://github.com/mburnayev/mb_website",
    skillIcons: websiteButtons
  },
  {
    title: "CatFinderinator3000",
    subtext: "August - October 2024, November - December 2024 ",
    description: "A multidiscipline project made to automate the process of recording and uploading cat videos.\n\nThis is accomplished using a RPi with PyTorch on it to set up a script that uses a MobileNetV2 model to detect cats, and when a cat is detected, a short video is recorded and uploaded to the cloud.\n\nOn the other end of the system, my publicly available Flutter App then pulls the videos from the cloud and makes them viewable.",
    link: "https://github.com/mburnayev/CatFinderinator3000",
    skillIcons: CF3KButtons
  },
  {
    title: "IFGDB (Intrusive Family Guy Discord Bot)",
    subtext: "October 2024",
    description: "This was a quick (but fully functional) project I made in a weekend after a friend jokingly suggested it — it's a Discord bot that automatically connects to a voice chat if a user joins, plays a short audio clip from Family Guy, and disconnects.",
    link: "https://github.com/mburnayev/IFGDBot",
    skillIcons: IFGDBButtons
  },
]

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen flex-row-reverse">
      {/* Sidebar */}
      <div className="w-[20%] min-w-[200px] flex flex-col items-center justify-between fixed right-0 h-screen overflow-y-auto bg-white dark:bg-black py-16 px-4">
        {/* Image */}
        <div className="w-full flex justify-center pt-4">
          <Image
            src="/images/pic.png"
            alt="I'm walkin' here!"
            width={200}
            height={200}
            priority
            className="dark:invert rounded-full aspect-square"
          />
        </div>

        {/* Anchor Links */}
        <nav className="flex flex-col items-center w-full">
          <a href="#about" className="text-xl md:text-2xl hover:underline mb-4">Home</a>
          <a href="#work" className="text-xl md:text-2xl hover:underline mb-4">Work</a>
          <a href="#projects" className="text-xl md:text-2xl hover:underline mb-4">Projects</a>
          <a href="#Resume" className="text-xl md:text-2xl hover:underline mb-4">Resume</a>
        </nav>

        {/* Socials */}
        <div className="pb-4">
          <AnimatedTooltip items={tooltipLinks} />
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ml-[5%] mr-[25%]">
          <h1 id="about"></h1>
          <div className="relative w-full flex items-center justify-start">
            <div className="absolute w-[1440px] h-[900px] transform scale-[0.4] origin-center" 
                 style={{ 
                   left: '11%', 
                   transform: 'translate(-50%, -50%) scale(0.4)',
                   top: '50%'
                 }}>
              <BackgroundLines> </BackgroundLines>
            </div>
            <h1 className="text-8xl font-bold font-[family-name:var(--font-magic-bubble)] relative">
              Hello
            </h1>
          </div>
          <p className="text-2xl">
            I'm <strong>Misha Burnayev</strong>, a philomath by heart, a software engineer by trade, and an <i>excellent</i> hire for any Software Engineering, Machine Learning, or related roles this coming summer of 2025.<br></br><br></br>
            I love learning, picking up new hobbies, and creating projects when I see opportunities to apply my knowledge. Out of my many interests, programming is my favorite since it's an excellent medium for efficiently bringing ideas to life with an eternally evolving toolkit, giving you limitless potential to create whatever you want (as long as it uses a computer).<br></br><br></br>
            I currently hold a bachelor's degree in Computer Science, a minor in Data Science, and I'm a first year master's student at George Mason University studying Software Engineering. I'm usually preoccupied with my schoolwork, but most of my free time goes to developing passion projects or doing one of my hobbies.
          </p>
          <h6 className="w-full border-t border-gray-300" id="work" />
          <HoverEffect className="mx-auto" items={workCards} />
          <h6 className="w-full border-t border-gray-300" id="projects" />
          <HoverEffect className="mx-auto" items={projectCards} />
          <h6 className="w-full border-t border-gray-300" id="Resume" />
          <div className="w-full flex justify-center mb-16">
            <Modal>
              <a href="http://150.136.52.185/" target="_blank">
                <ModalTrigger className="bg-white flex justify-center group/modal-btn rounded-full pl-10 pr-10 py-5 border-2 border-black">
                  <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                    <strong>Resume</strong>
                  </span>
                  <div className="translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute transition duration-500 text-white">
                    🎉
                  </div>
                </ModalTrigger>
              </a>
            </Modal>
          </div>
        </main>
        {/* Footer */}
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <p>Built with Next.js and Tailwind CSS, and deployed to Firebase!</p>
        </footer>
      </div>

    </div>
  );
}
