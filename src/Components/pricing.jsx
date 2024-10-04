import PricingCard from "./pricingCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  useGSAP(() => {
    gsap
      .timeline()
      .from(".headingPricing", {
        duration: 0.25,
        opacity: 0,
        ease: "power3.in",
        scrollTrigger: {
          trigger: ".headingPricing",
          start: "top 100%",
          end: "+=200",
          scrub: 2,
        },
      })
      .from(".subheadingPricing", {
        duration: 0.25,
        opacity: 0,
        ease: "power3.in",
        scrollTrigger: {
          trigger: ".subheadingPricing",
          start: "top 100%",
          end: "+=200",
          scrub: 2,
        },
      });
  });

  return (
    <>
      <div className="relative w-full space-y-5 px-12 py-12 text-center text-white sm:space-y-6">
        <div className="absolute inset-0 z-0 h-full rounded-full"></div>
        <h2 className="headingPricing z-20 text-center text-3xl font-medium text-white sm:text-6xl">
          Pricing
        </h2>
        <p className="subheadingPricing relative z-20 font-light sm:mx-auto sm:w-1/3 sm:text-xl">
          Choose the right plan to meet your SEO needs and start optimizing
          today.
        </p>
        <p className="subheadingPricing pb-12 text-sm text-white/70 sm:pb-2">
          Billed Yearly
        </p>

        <div className="relative">
          <div className="absolute z-0 mx-auto h-full w-full rounded-full bg-radial-gradient from-[#361764] blur-3xl sm:hidden"></div>
          <div className="absolute -inset-10 z-0 m-auto hidden h-full w-[60%] rounded-full bg-radial-gradient from-[#361764] blur-3xl sm:block"></div>

          <PricingCard />
        </div>
      </div>
    </>
  );
};

export default Pricing;
