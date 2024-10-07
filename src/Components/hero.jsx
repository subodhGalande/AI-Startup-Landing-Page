import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import Modal from "./modal";

const Hero = () => {
  const logos = [
    "/acme.png",
    "/quantum.png",
    "/pulse.png",
    "/apex.png",
    "/echo.png",
    "/celestial.png",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleOnChange = (e) => setEmail(e.target.value);

  const handleModalOpen = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setEmail("");
  };

  const heroContainer = useRef();
  const heroText = useRef();
  const tl = useRef();
  const heroImage = useRef();
  const brandRibbon = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          delay: 1,
        })
        .from(heroText.current, {
          x: -20,
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
          delay: 0.25,
        })
        .from(
          heroImage.current,
          {
            x: 20,
            opacity: 0,
            ease: "power1.out",
            immediateRender: true,
            lazy: false,
          },
          "-=.5",
        )
        .from(brandRibbon.current, {
          y: 100,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        })
        .to(heroImage.current, {
          y: 20,
          duration: 1.5,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        })
        .to(
          ".brandLogo",
          {
            xPercent: -100,
            duration: 25,
            repeat: -1,
            ease: "linear",
            modifiers: {
              xPercent: gsap.utils.wrap(-100, 0), // Ensures continuous smooth scrolling
            },
          },
          "-=1",
        );
    },
    { scope: heroContainer },
  );

  return (
    <>
      <section className="relative h-fit w-full overflow-hidden bg-hero-pattern-mobile py-8 sm:mx-auto sm:h-screen-minus-navbar-mobile sm:bg-hero-pattern-desktop sm:py-0 sm:pl-36">
        <div className="absolute inset-0 z-10 h-full w-full rounded-b-3xl bg-stars-Mobile sm:w-screen sm:bg-stars-desktop sm:bg-contain"></div>
        <div className="absolute -bottom-[36rem] -right-[10rem] hidden h-[58rem] w-[58rem] rounded-full bg-[#8C45FF]/70 blur-3xl sm:block"></div>
        <div className="absolute z-0 hidden h-full w-full bg-gradient-to-tl from-[#8C45FF] to-50% sm:block"></div>
        {/* <div className="absolute -bottom-[1100px] -right-[400px] z-0 h-[210%] w-[200%] rounded-full bg-[#8C45FF] opacity-70 blur-3xl"></div> */}
        <div className="absolute inset-0 bg-gradient-to-br from-black to-black/30"></div>

        {/* hero Content */}
        <div
          ref={heroContainer}
          className="flex h-full flex-col items-center justify-center px-10 sm:h-[90%] sm:w-fit sm:flex-row sm:flex-wrap sm:justify-center sm:px-0"
        >
          <div
            ref={heroText}
            id="herotext"
            className="relative z-20 flex flex-col gap-y-7 pt-20 sm:h-fit sm:w-[40%] sm:p-0"
          >
            <div className="flex items-center gap-2 self-start rounded-full border-2 border-white/10 bg-black px-3 py-2">
              <div className="rounded-full bg-AI-Purple px-1 text-[10px]">
                <p className="font-bold text-black">NEW</p>
              </div>
              <div>
                <p className="text-base text-AI-Purple">
                  Latest integration just arrived
                </p>
              </div>
            </div>
            <h1 className="bg-gradient-to-br from-gray-700 from-0% to-white to-40% bg-clip-text text-[54px] font-medium leading-tight text-transparent sm:text-8xl">
              Elevate your SEO efforts.
            </h1>
            <p className="text-lg font-light leading-relaxed text-white/70">
              Elevate your site’s visibility effortlessly with AI, where smart
              technology meets user-friendly SEO tools.
            </p>
            <form
              onSubmit={handleModalOpen}
              className="flex h-fit w-full flex-col gap-4 sm:flex-row sm:gap-0"
            >
              <input
                type="email"
                className="h-fit w-full rounded-md border border-white/30 bg-transparent px-4 py-2 text-white placeholder-white/40 sm:w-fit sm:rounded-r-none"
                placeholder="Type Email"
                onChange={(e) => handleOnChange(e)}
                required
              ></input>
              <button
                type="submit"
                className="btn-primary w-full bg-white py-2 text-black sm:w-max sm:rounded-l-none sm:py-1"
              >
                Join Waitlist
              </button>
            </form>
          </div>
          <div ref={heroImage} className="z-30 hidden h-full w-1/2 sm:block">
            {" "}
            <img
              src="/hero3d.png"
              height="100%"
              width="100%"
              className="-ml-20 h-full w-full object-contain"
            />{" "}
          </div>

          {/* brands ribbon */}
          <div
            ref={brandRibbon}
            className="relative z-20 flex flex-col items-center justify-center sm:-mt-4 sm:w-screen sm:flex-row sm:justify-start sm:gap-x-10 sm:justify-self-start"
          >
            <div className="shrink-0 flex-col flex-nowrap pt-10 sm:flex sm:w-fit sm:pt-0">
              <p className="text-sm font-light text-white/70">
                Trusted by top innovative teams:
              </p>
            </div>

            <div className="relative flex h-20 overflow-x-hidden sm:py-0">
              <ul className="brandLogo flex h-20 items-center justify-start">
                {logos &&
                  logos.map((logo, index) => (
                    <li
                      key={index}
                      className="flex h-8 w-max items-center justify-center px-12"
                    >
                      {" "}
                      <img
                        src={logo}
                        className="h-full w-fit object-contain"
                      />{" "}
                    </li>
                  ))}
              </ul>
              <ul className="brandLogo flex h-20 items-center justify-start">
                {logos &&
                  logos.map((logo, index) => (
                    <li
                      key={index}
                      className="flex h-8 w-max items-center justify-center px-12"
                    >
                      {" "}
                      <img
                        src={logo}
                        className="h-full w-fit object-contain"
                      />{" "}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-10 h-full rounded-b-3xl bg-mobile-gradient bg-cover sm:hidden"></div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <p className="">
            Check inbox at <strong>{email} </strong>
            for confirmation, we’ll be in touch soon!
          </p>
        </Modal>
      </section>
    </>
  );
};

export default Hero;
