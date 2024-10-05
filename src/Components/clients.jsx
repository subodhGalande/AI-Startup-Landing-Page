import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  useGSAP(() => {
    gsap
      .timeline()
      .from(".headingClient", {
        duration: 0.25,
        opacity: 0,
        ease: "power3.in",
        scrollTrigger: {
          trigger: ".headingClient",
          start: "top 100%",
          end: "+=200",
          scrub: 2,
        },
      })
      .from(".subheadingClient", {
        duration: 0.25,
        opacity: 0,
        ease: "power3.in",
        scrollTrigger: {
          trigger: ".subheadingClient",
          start: "top 100%",
          end: "+=200",
          scrub: 2,
        },
      });
    gsap.to(".clientMarquee", {
      xPercent: -100,
      duration: 120,
      repeat: -1,
      ease: "none",
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0), // Ensures continuous smooth scrolling
      },
    });
  });

  const clientList = [
    {
      name: "James Roberts",
      position: "Head of SEO @ Apex",
      comment:
        "This AI tool has taken our SEO to the next level. It uncovers opportunities faster than any other tool we've used and has helped us outperform our competition.",
      avatar: "/avatar1.png",
    },
    {
      name: "Zyltra Antrinox",
      position: "Cosmic Brand Strategist @ ExoPlanet Strategies",
      comment:
        "This tool has completely changed the way we approach SEO. The AI suggestions are spot-on and have driven measurable improvements in traffic.",
      avatar: "/avatar5.png",
    },
    {
      name: "Emily Carter",
      position: "Content Manager @ Acme Corp",
      comment:
        "Our SEO performance skyrocketed after using this AI tool. It identifies opportunities we never would have spotted manually.",
      avatar: "/avatar3.png",
    },
    {
      name: "Quintis Nebulon",
      position: "Interstellar Marketing Consultant @ Celestial Intergalactics",
      comment:
        "This AI-powered SEO tool has streamlined our entire workflow. It takes the guesswork out of keyword optimization and saves us so much time.",
      avatar: "/avatar4.png",
    },
    {
      name: "David Lee",
      position: "Marketing Head @ Quantum",
      comment:
        "The AI's ability to predict trends and offer data-driven insights is a game-changer for our SEO strategy. It’s made us more competitive in the market.",
      avatar: "/avatar2.png",
    },
    {
      name: "Elara Voxlith",
      position: "Universal Outreach Coordinator @ Orion's Edge Consulting",
      comment:
        "From automated keyword analysis to personalized content suggestions, this tool has transformed how we manage SEO. It’s like having an extra team member!",
      avatar: "/avatar6.png",
    },
  ];

  return (
    <>
      <div
        id="testimonials"
        className="relative mx-auto flex flex-col space-y-4 overflow-hidden py-14 text-center text-white sm:mt-20 sm:max-w-[1920px] sm:gap-y-4 sm:space-y-3"
      >
        <h2 className="headingClient z-20 text-center text-3xl font-medium text-white sm:text-6xl">
          What people say
        </h2>
        <p className="subheadingClient relative z-20 w-fit px-6 pb-5 font-light sm:mx-auto sm:w-[600px] sm:text-xl">
          Hear firsthand how our solutions have boosted online success for users
          like you.
        </p>

        {/* clients card container */}
        <div className="flex w-full overflow-hidden">
          <div className="clientMarquee flex w-max items-center">
            {/* clients card */}
            {clientList &&
              clientList.map((item, index) => (
                <div
                  key={index}
                  className="relative mx-3 flex h-fit w-72 shrink-0 flex-col gap-y-4 overflow-clip rounded-xl border-2 border-white/10 px-6 py-8 sm:w-80"
                >
                  <div className="absolute -inset-10 z-0 h-64 w-64 rounded-full border bg-[#8C45FF]/30 blur-3xl"></div>
                  <img src={item.avatar} alt="" className="h-26 z-0 w-24" />
                  <div className="z-10 text-left">
                    <p>{item.name}</p>
                    <p className="text-sm text-white/70">{item.position}</p>
                  </div>
                  <p className="text z-20 text-left font-medium text-white sm:text-xl">
                    &quot;{item.comment}&quot;
                  </p>
                </div>
              ))}
          </div>
          <div className="clientMarquee flex w-max items-center">
            {/* clients card */}
            {clientList &&
              clientList.map((item, index) => (
                <div
                  key={index}
                  className="relative mx-3 flex h-fit w-80 shrink-0 flex-col gap-y-4 overflow-clip rounded-xl border-2 border-white/10 px-6 py-8"
                >
                  <div className="absolute -inset-10 z-0 h-64 w-64 rounded-full border bg-[#8C45FF]/30 blur-3xl"></div>
                  <img src={item.avatar} alt="" className="h-26 z-0 w-24" />
                  <div className="z-10 text-left">
                    <p>{item.name}</p>
                    <p className="text-sm text-white/70">{item.position}</p>
                  </div>
                  <p className="text z-20 text-left font-medium text-white sm:text-xl">
                    &quot;{item.comment}&quot;
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
