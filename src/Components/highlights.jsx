import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const textPill = useRef();
  const cardSection = useRef();
  const cardContainer = gsap.utils.selector(cardSection);

  useGSAP(() => {
    gsap.from(textPill.current, {
      y: 100,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: textPill.current,
        start: "top 100%",
      },
    });
    gsap.from("#headingText", {
      y: 100,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: "#headingText",
        start: "top 100%",
      },
    });
    gsap.from(cardContainer(".cards"), {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".cards",
        start: "top 100%",
        end: "bottom 50%",
        scroller: "body",
        scrub: 2,
      },
    });
    gsap.from(".cardImage", {
      y: -10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  return (
    <>
      <section
        id="scrollTrigger"
        className="mt-14 flex flex-col justify-center gap-y-20 px-6"
      >
        <div className="flex flex-col items-center gap-y-6">
          <div
            ref={textPill}
            id="pill"
            className="flex w-fit items-center justify-center gap-2 rounded-full border-2 border-white/10 bg-black px-3 py-2"
          >
            <p className="text-base text-AI-Purple">Everything you need </p>
          </div>
          <h1
            id="headingText"
            className="text-center text-2xl font-medium text-white sm:w-1/3 sm:text-3xl"
          >
            Harness the power of AI, making search engine optimization intuitive
            and effective for all skill levels.
          </h1>
        </div>
        {/* card section */}

        <div
          ref={cardSection}
          className="flex flex-col gap-y-14 sm:mx-auto sm:w-2/3 sm:gap-y-4"
        >
          <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-3">
            {/* card 1 */}
            <div className="cards flex h-[400px] w-full flex-col items-center justify-around rounded-xl border-2 border-white/10 px-7 py-5 sm:w-80">
              <div className="h-fit w-64">
                <img className="cardImage" src="/holo-sphere.png" />
              </div>
              <div className="space-y-3 text-white">
                <h1 className="font-bold">SEO goal setting</h1>
                <p className="text-white/70">
                  Helps you set and achieve SEO goals with guided assistance.
                </p>
              </div>
            </div>
            {/* card 2 */}
            <div className="cards group relative flex h-[400px] w-full flex-col justify-end overflow-clip rounded-xl px-7 py-10">
              <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-transparent to-[#371866] group-hover:from-50%"></div>
              <div className="absolute inset-10 z-0 h-full w-11/12 sm:inset-16">
                <img
                  src="/userfriendly.png"
                  className="object-cover sm:h-fit sm:w-auto"
                />
              </div>
              <div className="z-10 h-fit space-y-3 text-white">
                <h1 className="font-bold">User-friendly dashboard</h1>
                <p className="text-white/70">
                  Perform complex SEO audits and optimizations with a single
                  click.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-3">
            {/* card 1 */}
            <div className="cards group relative flex h-[400px] w-full flex-col justify-end overflow-clip rounded-xl px-7 py-10">
              <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-transparent to-[#371866] group-hover:from-50%"></div>
              <div className="absolute -bottom-32 z-0 h-full w-11/12 sm:-bottom-8 sm:mx-auto sm:h-fit">
                <img
                  src="/visualreport.png"
                  className="h-fit w-auto object-cover"
                />
              </div>
              <div className="z-10 h-fit space-y-3 self-stretch text-white">
                <h1 className="font-bold">Visual reports</h1>
                <p className="text-white/70">
                  Visual insights into your site’s performance.
                </p>
              </div>
            </div>
            {/* card 2 */}
            <div className="cards flex h-[400px] w-full flex-col items-center justify-around rounded-xl border-2 border-white/10 px-7 py-5 sm:w-80">
              <div className="h-fit w-64">
                <img className="cardImage" src="/springholo.png" />
              </div>
              <div className="space-y-3 text-white">
                <h1 className="font-bold">Smart Keyword Generator</h1>
                <p className="text-white/70">
                  Automatic suggestions and the best keywords to target.{" "}
                </p>
              </div>
            </div>
            {/* card 2 */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Highlights;
