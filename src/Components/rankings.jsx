import { CgPerformance } from "react-icons/cg";
import { FaListCheck } from "react-icons/fa6";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { VscGraphLine } from "react-icons/vsc";
import { TbTargetArrow } from "react-icons/tb";
import { PiCursorClickBold } from "react-icons/pi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    heading: "User-friendly dashboard",
    desc: "Perform complex SEO audits and optimizations with a single click.",
    icon: <CgPerformance />,
  },
  {
    heading: "Content evaluation",
    desc: "Simple corrections for immediate improvemens.",
    icon: <FaListCheck />,
  },
  {
    heading: "Link Optimization Wizard",
    desc: "Guides you through the process of creating and managing links.",
    icon: <FaWandMagicSparkles />,
  },
  {
    heading: "Visual reports",
    desc: "Visual insights into your site’s performance.",
    icon: <VscGraphLine />,
  },
  {
    heading: "SEO goal setting",
    desc: "Helps you set and achieve SEO goals with guided assistance.",
    icon: <TbTargetArrow />,
  },
  {
    heading: "One-click optimization",
    desc: "Perform complex SEO audits and optimizations with a single click.",
    icon: <PiCursorClickBold />,
  },
];

const Rankings = () => {
  useGSAP(() => {
    gsap.from(headingText.current, {
      x: -50,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: headingText.current,
        start: "top 100%",
        end: "+=200",
        scrub: 2,
      },
    });
    gsap.from(".textList", {
      x: -20,
      duration: 0.5,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".textList",
        start: "top 100%",
        end: "+=300",
        scrub: 2,
      },
    });
  });

  const headingText = useRef();
  return (
    <>
      <div className="relative mt-20 flex h-fit w-full flex-col justify-start gap-y-16 border-2 border-white/10 px-12 py-16">
        <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-bl from-transparent to-[#190D2E]"></div>
        <h2
          ref={headingText}
          className="z-10 text-center text-2xl font-medium text-white sm:w-1/3 sm:text-left sm:text-6xl"
        >
          Elevate your Rankings.
        </h2>
        <div className="z-10">
          <ul className="mx-auto space-y-10 sm:flex sm:w-full sm:flex-wrap sm:justify-around sm:gap-y-6 sm:space-y-0">
            {features.map((item, index) => (
              <li
                key={index}
                className="textList sm:h-22 sm:flex sm:w-1/3 sm:flex-col sm:px-5"
              >
                <div className="z-10 flex h-fit items-center gap-x-2 text-white">
                  {item.icon}
                  <h1 className="font-bold">{item.heading}</h1>
                </div>
                <p className="pt-3 text-white/70">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Rankings;
