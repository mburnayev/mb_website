"use client";
import { useState } from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Modal, ModalTrigger } from "@/components/ui/animated-modal";
import { FunkContext } from "@/contexts/FunkContext";

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
    image: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-round-color-icon.png",
    href: "https://discordapp.com/users/228204911098200064"
  },
  {
    id: 4,
    name: "Email",
    designation: "Infiltrate my inbox",
    image: "https://static.vecteezy.com/system/resources/previews/016/716/465/non_2x/gmail-icon-free-png.png",
    href: "mailto:misha@burnayev.com"
  }
];

const iDirectButtons = [
  {
    name: "C++",
    bgcolor: "#8BB6E4",
    txcolor: "#000000",
    icon: "images/cpp_logo.png"
  },
  {
    name: "Git",
    bgcolor: "#FFA79A",
    txcolor: "#000000",
    icon: "images/git_logo.png"
  },
  {
    name: "JavaScript",
    bgcolor: "#FFEF84",
    txcolor: "#000000",
    icon: "images/javascript_logo.png"
  },
  {
    name: "Jenkins",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "images/jenkins_logo.png"
  },
  {
    name: "Docker",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "images/docker_logo.webp"
  }
]

const researchButtons = [
  {
    name: "C++",
    bgcolor: "#8BB6E4",
    txcolor: "#000000",
    icon: "images/cpp_logo.png"
  },
  {
    name: "Python",
    bgcolor: "#A8A8A8",
    txcolor: "#000000",
    icon: "images/python_logo.svg"
  },
  {
    name: "OpenMV",
    bgcolor: "#9cc4ed",
    txcolor: "#000000",
    icon: "images/openmv_logo.png"
  },
  {
    name: "OpenCV",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "images/opencv_logo.webp"
  }
]

const DSButtons = [
  {
    name: "Python",
    bgcolor: "#A8A8A8",
    txcolor: "#000000",
    icon: "images/python_logo.svg"
  },
  {
    name: "R",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "images/r_logo.png"
  }
]

const CSButtons = [
  {
    name: "Python",
    bgcolor: "#A8A8A8",
    txcolor: "#000000",
    icon: "images/python_logo.svg"
  },
  {
    name: "Java",
    bgcolor: "#A8A8A8",
    txcolor: "#000000",
    icon: "images/java_logo.png"
  },
  {
    name: "C",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "images/c_logo.png"
  }
]

const CF3KButtons = [
  {
    name: "Dart",
    bgcolor: "#76F4E2",
    txcolor: "#000000",
    icon: "images/dart_logo.png"
  },
  {
    name: "Flutter",
    bgcolor: "#B2E8FF",
    txcolor: "#000000",
    icon: "images/flutter_logo.webp"
  },
  {
    name: "Python",
    bgcolor: "#A8A8A8",
    txcolor: "#000000",
    icon: "images/python_logo.svg"
  },
  {
    name: "PyTorch",
    bgcolor: "#D5A9A0",
    txcolor: "#000000",
    icon: "images/pytorch_logo.webp"
  },
  {
    name: "OpenCV",
    bgcolor: "#A8A8A8",
    txcolor: "#000000",
    icon: "images/opencv_logo.webp"
  },
  {
    name: "Git",
    bgcolor: "#FFA79A",
    txcolor: "#000000",
    icon: "images/git_logo.png"
  },
  {
    name: "Firebase",
    bgcolor: "#FFDC68",
    txcolor: "#000000",
    icon: "images/firebase_logo.png"
  },
  {
    name: "Tensorflow",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "images/tensorflow_logo.png"
  },
]

const websiteButtons = [
  {
    name: "Next.JS",
    bgcolor: "#888888",
    txcolor: "#000000",
    icon: "images/nextjs_logo.webp"
  },
  {
    name: "TypeScript",
    bgcolor: "#73A5DD",
    txcolor: "#000000",
    icon: "images/typescript_logo.png"
  },
  {
    name: "HTML",
    bgcolor: "#D5A9A0",
    txcolor: "#000000",
    icon: "images/html_logo.webp"
  },
  {
    name: "Tailwind CSS",
    bgcolor: "#A2E3FF",
    txcolor: "#000000",
    icon: "images/tailwind_logo.png"
  },
  {
    name: "Git",
    bgcolor: "#FFA79A",
    txcolor: "#000000",
    icon: "images/git_logo.png"
  },
  {
    name: "Node.JS",
    bgcolor: "#CAE79D",
    txcolor: "#000000",
    icon: "images/nodejs_logo.webp"
  },
  {
    name: "Firebase",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "images/firebase_logo.png"
  },
  {
    name: "Nginx",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "images/nginx_logo.webp"
  },
  {
    name: "OCI",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "images/oci_logo.png"
  },
  {
    name: "GCP",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "images/gcp_logo.png"
  }
]

const IFGDBButtons = [
  {
    name: "JavaScript",
    bgcolor: "#FFEF84",
    txcolor: "#000000",
    icon: "images/javascript_logo.png"
  },
  {
    name: "Discord API",
    bgcolor: "#9DA5FF",
    txcolor: "#000000",
    icon: "images/discord_logo.png"
  },
  {
    name: "Git",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "images/git_logo.png"
  },
  {
    name: "Node.JS",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "images/nodejs_logo.webp"
  }
]

const YTButtons = [
  {
    name: "JavaScript",
    bgcolor: "#FFEF84",
    txcolor: "#000000",
    icon: "images/javascript_logo.png"
  },
  {
    name: "YouTube API",
    bgcolor: "#FF8888",
    txcolor: "#000000",
    icon: "images/youtube_logo.png"
  },
  {
    name: "Git",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "images/git_logo.png"
  },
  {
    name: "Node.JS",
    bgcolor: "#FFFFFF",
    txcolor: "#000000",
    icon: "images/nodejs_logo.webp"
  }
]

const workCards = [
  {
    title: "Software Engineering Intern @ ST Engineering iDirect",
    subtext: "May - August 2024",
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
    description: "Handled in-person and remote instruction and assistance, and grading for CDS 102 and CDS 230.",
    link: "https://science.gmu.edu/academics/departments-units/computational-data-sciences",
    skillIcons: DSButtons
  },
  {
    title: "CS Undergraduate Teaching Assistant @ George Mason University",
    subtext: "August 2021 - December 2023",
    description: "Handled in-person and remote instruction and assistance, and grading for CS 112, CS 211, CS 262, and CS 306.",
    link: "https://cs.gmu.edu/",
    skillIcons: CSButtons
  },
]

const bigProjectCards = [

  {
    title: "CF3K (CatFinderinator3000)",
    subtext: "August - December 2024",
    description: "A multidiscipline project made to automate the process of recording and uploading cat videos.\n\nThis is accomplished using a RPi with PyTorch on it to set up a script that uses a MobileNetV2 model to detect cats, and when a cat is detected, a short video is recorded and uploaded to the cloud.\n\nOn the other end of the system, my publicly available Flutter App then pulls the videos from the cloud and makes them viewable.",
    link: "https://github.com/mburnayev/CatFinderinator3000",
    skillIcons: CF3KButtons
  },

]

const smallProjectCards = [
  {
    title: "YT Channel Viewtime Calculator",
    subtext: "March 2025",
    description: "Made to gather empirical data for a hypothetical on whether you'd watch all of Sesame Street or Annoying Orange, this was another project with humorous roots. First iteration completed in the better part of an evening.",
    link: "https://github.com/mburnayev/yt-calc-channel-viewtime",
    skillIcons: YTButtons
  },
  {
    title: "misha.burnayev.com",
    subtext: "November - December 2024",
    description: "*This* website — as you can probably tell, this primarily serves as a portfolio of experiences pertaining to my career.\n\nDesigned with Next to use some of the pre-built components that looked cool, but I expanded the project scope to get the functionality I wanted as this project was made under a Google organization and Firebase changed their free tier policies.",
    link: "https://github.com/mburnayev/mb_website",
    skillIcons: websiteButtons
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
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);

  const handleClick = () => {
    setIsAudioEnabled(!isAudioEnabled);
  };

  return (
    <FunkContext.Provider value={{ isFunkEnabled: isAudioEnabled, setIsFunkEnabled: setIsAudioEnabled }}>
      <div className="flex flex-col lg:flex-row-reverse min-h-screen overflow-x-hidden">
        {/* Vertical Divider */}
        <div className="hidden lg:block fixed right-[20%] w-[1px] h-screen bg-gray-400 dark:bg-gray-700" />

        {/* Sidebar */}
        <div className="lg:w-[20%] lg:min-w-[200px] flex lg:flex-col items-center justify-between lg:fixed lg:right-0 lg:h-screen 
                        w-full sticky top-0 z-50 bg-gray-200 py-4 lg:py-16 px-4">
          {/* Image */}
          <div className="lg:w-full flex justify-center lg:pt-4 relative group">
            <img
              src="/images/big_image.jpg"
              alt="image of me"
              width="200"
              height="200"
              onClick={handleClick}
              className={`rounded-full aspect-square w-12 lg:w-[65%] ${isAudioEnabled ? "ring-4 ring-blue-400" : ""}`}
            />
            {/* Image Tooltip */}
            <div className="absolute lg:left-1/2 left-14 transform lg:-translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 bg-yellow-300 text-black text-xs py-2 px-2 text-nowrap rounded-md">
              {isAudioEnabled ? "Turn off the funk!!!" : "Turn on the funk?"}
            </div>
          </div>

          {/* Anchor Links */}
          <nav className="hidden lg:flex lg:flex-col items-center w-full">
            <a href="#about" className="text-lg xl:text-2xl 2xl:text-3xl hover:underline mb-4">Home</a>
            <a href="#work" className="text-lg xl:text-2xl 2xl:text-3xl hover:underline mb-4">Work</a>
            <a href="#projects" className="text-lg xl:text-2xl 2xl:text-3xl hover:underline mb-4">Projects</a>
            <a href="#resume" className="text-lg xl:text-2xl 2xl:text-3xl hover:underline mb-4">Resume</a>
          </nav>

          {/* Socials */}
          <div className="flex justify-end lg:justify-start pr-4 lg:pr-0">
            <div className="flex flex-row lg:flex-col">
              <AnimatedTooltip items={tooltipLinks} />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <BackgroundLines>
          <div className="flex-1 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-4 lg:p-8 pb-20 lg:pb-20 sm:p-20 overflow-x-hidden">
            <main className="flex flex-col gap-8 row-start-2 items-center lg:items-start mx-4 lg:ml-[5%] lg:mr-[25%]">
              <h1 id="about"></h1>
              {/* Big Name */}
              <div className="relative w-full flex items-center lg:justify-start justify-center">
                <h1 className={`text-4xl lg:text-8xl font-bold font-[family-name:var(--font-magic-bubble)] relative text-center
                ${isAudioEnabled ? "animate-rainbow-text" : ""}`}>
                  Misha Burnayev
                </h1>
              </div>

              {/* Elevator Pitch */}
              <p className="text-lg lg:text-2xl">
                <strong>Hello!</strong> I'm a philomath by heart, a software engineer by trade, and an <i>excellent</i> hire for any Software Engineering, Machine Learning, or related roles this coming summer of 2025.<br></br><br></br>
                I love learning, picking up new hobbies, and creating projects when I see opportunities to apply my knowledge. Out of my many interests, programming is my favorite since it's an excellent medium for effectively bringing ideas to life with a perpetually evolving toolkit, giving you limitless potential to create whatever you want (as long as it uses a computer).<br></br><br></br>
                I currently hold a bachelor's degree in Computer Science with a minor in Data Science, and I'm a first year master's student at George Mason University studying Software Engineering. I'm usually preoccupied with my schoolwork, but most of my free time goes to developing passion projects or doing one of my hobbies.
              </p>
              {/* Work */}
              <h6 className="w-full border-t border-gray-300" id="work" />
              <HoverEffect className="mx-auto w-full" items={workCards} />
              {/* Big Projects */}
              <h6 className="w-full border-t border-gray-300" id="projects" />
              <HoverEffect className="mx-auto w-full" items={bigProjectCards} />
              {/* Bargain Bin Projects */}
              <h6 className="w-full border-t border-gray-300" id="smallProjects" />
              <HoverEffect className="mx-auto w-full" items={smallProjectCards} />
              {/* Moneymaker */}
              <h6 className="w-full border-t border-gray-300" id="resume" />
              <div className="w-full flex justify-center mb-16">
                <Modal>
                  <a href="resume.pdf" target="_blank">
                    <ModalTrigger className="bg-white flex justify-center group/modal-btn rounded-full pl-10 pr-10 py-5 border-2 border-black">
                      <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                        <strong>Resume</strong>
                      </span>
                      <div className="translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute transition duration-500 text-white">
                        🧰
                      </div>
                    </ModalTrigger>
                  </a>
                </Modal>
              </div>
            </main>

            {/* Footer */}
            {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm lg:text-base p-4">
            <p>Built with Next.js and Tailwind CSS, and deployed to Firebase!</p>
          </footer> */}
          </div>
        </BackgroundLines>
      </div>
    </FunkContext.Provider>
  );
}
