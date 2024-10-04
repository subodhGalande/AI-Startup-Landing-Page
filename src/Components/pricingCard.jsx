import { IoCheckmarkSharp } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const prices = [
  {
    plan: "Basic",
    price: "$29/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
    ],
  },
  {
    plan: "Pro",
    price: "$79/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
      "Content suggestions",
      "Link optimization",
    ],
  },
  {
    plan: "Business",
    price: "$149/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
      "Content suggestions",
      "Link optimization",
      "Multi-user access",
      "API integration",
    ],
  },
];

const PricingCard = () => {
  const pricingSection = useRef();
  const cardContainer = gsap.utils.selector(pricingSection);

  useGSAP(() => {
    gsap.from(cardContainer(".pricingCards"), {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".pricingCards",
        start: "top 100%",
        end: "+=400",
        scroller: "body",
        scrub: 2,
      },
    });
  });

  return (
    <>
      <div
        ref={pricingSection}
        className="relative z-20 mx-auto space-y-4 sm:flex sm:w-fit sm:gap-x-4 sm:space-y-0"
      >
        {" "}
        {prices.map((item, index) => (
          <div
            key={index}
            className="pricingCards group relative flex h-fit w-full flex-col justify-between gap-y-10 overflow-clip rounded-xl border-2 border-white/10 px-5 py-6 sm:mx-auto sm:w-72"
          >
            <div className="h-11/12 absolute inset-0 z-0 w-full bg-hero-pattern-mobile bg-cover bg-center opacity-30 transition-opacity duration-200 sm:bg-desktop-pricing-patter sm:bg-contain sm:opacity-0 sm:group-hover:opacity-20"></div>
            <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-black to-[#361764]/30 transition-opacity duration-200 sm:opacity-0 sm:group-hover:opacity-100"></div>
            <div className="relative z-30 space-y-3 text-left">
              <h2 className="text-2xl font-medium text-white">{item.plan}</h2>
              <p className="text-white/70">{item.price}</p>
              <div className="absolute -bottom-6 z-30 w-full border border-white/10"></div>
            </div>
            <div className="z-20 h-full space-y-3 text-left">
              {item.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-x-2">
                  <IoCheckmarkSharp />
                  <p className="text-sm">{feature}</p>
                </div>
              ))}
            </div>
            <button className="btn-primary sm:btn-secondary sm:group-hover:btn-primary z-30">
              Join Waitlist
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingCard;
