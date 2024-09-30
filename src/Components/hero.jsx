const Hero = () => {
  return (
    <>
      <section className="sm:bg-hero-pattern-desktop bg-fill relative h-fit w-screen overflow-clip bg-hero-pattern-mobile sm:mx-auto sm:h-screen-minus-navbar-mobile">
        <div className="bg-stars-Mobile sm:bg-stars-desktop absolute inset-0 z-10 h-full w-full rounded-b-3xl sm:w-screen sm:bg-contain"></div>
        <div className="absolute -bottom-[36rem] -right-[10rem] hidden h-[58rem] w-[58rem] rounded-full bg-[#8C45FF]/70 blur-3xl sm:block"></div>
        <div className="absolute z-0 hidden h-full w-full bg-gradient-to-tl from-[#8C45FF] to-50% sm:block"></div>
        {/* <div className="absolute -bottom-[1100px] -right-[400px] z-0 h-[210%] w-[200%] rounded-full bg-[#8C45FF] opacity-70 blur-3xl"></div> */}
        <div className="absolute inset-0 bg-gradient-to-br from-black to-black/30"></div>
        {/* hero Content */}
        <div className="flex h-full flex-col items-center justify-center px-10 sm:h-[90%] sm:flex-row sm:flex-wrap sm:justify-end sm:px-0 sm:pl-20">
          <div className="relative z-20 flex flex-col gap-y-7 pt-20 sm:h-fit sm:w-[40%] sm:p-0">
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
            <div className="flex h-fit w-full flex-col gap-4 sm:flex-row sm:gap-0">
              <input
                type="text"
                className="h-fit w-full rounded-md border border-white/30 bg-transparent px-4 py-2 placeholder-white/40 sm:w-fit"
                placeholder="Type Email"
              ></input>
              <button className="btn-primary w-full bg-white py-2 text-black sm:w-max sm:py-1">
                Join Waitlist
              </button>
            </div>
          </div>
          <div className="z-30 hidden h-full w-1/2 sm:block">
            {" "}
            <img
              src="/hero3d.png"
              className="h-full w-full object-contain"
            />{" "}
          </div>
        </div>
        {/* brands ribbon */}
        <div className="relative z-20 flex h-fit w-full flex-col items-center justify-center gap-y-4 py-10 sm:ml-auto sm:w-[85%] sm:flex-row sm:gap-x-20 sm:px-0 sm:py-0">
          <p className="shrink-0 text-sm font-light text-white/70 sm:justify-self-start">
            Trusted by top innovative teams
          </p>
          <div className="py-2">
            <ul className="flex h-10 items-center gap-x-8 sm:gap-x-12">
              <li className="h-fit w-full">
                {" "}
                <img src="/acme.png" className="" />{" "}
              </li>
              <li className="h-fit w-full">
                {" "}
                <img src="/quantum.png" />{" "}
              </li>
              <li className="h-fit w-full">
                {" "}
                <img src="/pulse.png" />{" "}
              </li>
              <li className="h-fit w-full">
                {" "}
                <img src="/apex.png" />{" "}
              </li>
              <li className="h-fit w-full">
                {" "}
                <img src="/echo.png" />{" "}
              </li>
              <li className="h-fit w-full">
                {" "}
                <img src="/celestial.png" />{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-mobile-gradient absolute inset-0 z-10 h-full rounded-b-3xl bg-cover sm:hidden"></div>
      </section>
    </>
  );
};

export default Hero;
