import { CgPerformance } from "react-icons/cg";
import { FaListCheck } from "react-icons/fa6";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { VscGraphLine } from "react-icons/vsc";
import { TbTargetArrow } from "react-icons/tb";
import { PiCursorClickBold } from "react-icons/pi";

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
  return (
    <>
      <div className="relative mt-20 flex h-fit w-full flex-col justify-start gap-y-16 border-2 border-white/10 px-12 py-16">
        <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-bl from-transparent to-[#190D2E]"></div>
        <h2 className="z-10 text-center text-2xl font-medium text-white">
          Elevate your Rankings.
        </h2>
        <div className="z-10">
          <ul className="space-y-10">
            {features.map((item, index) => (
              <li key={index}>
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
