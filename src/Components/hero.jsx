const Hero = () => {
  return (
    <>
      <section className="relative h-full w-screen overflow-x-hidden bg-opacity-35 bg-hero-pattern-mobile">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-black/30"></div>
        <div className="flex h-screen flex-col items-center justify-center gap-7 px-10">
          <div className="z-10 flex items-center gap-2 self-start rounded-full border-2 border-white/10 bg-black px-3 py-2">
            <div className="rounded-full bg-AI-Purple px-1 text-[10px]">
              <p className="font-bold text-black">NEW</p>
            </div>
            <div>
              <p className="text-base text-AI-Purple">
                Latest integration just arrived
              </p>
            </div>
          </div>
          <h1 className="z-10 bg-gradient-to-br from-gray-700 from-0% to-white to-40% bg-clip-text text-[54px] font-medium leading-tight text-transparent">
            Elevate your SEO efforts.
          </h1>
          <p className="z-10 text-lg font-light leading-relaxed text-white/70">
            Elevate your site’s visibility effortlessly with AI, where smart
            technology meets user-friendly SEO tools.
          </p>
          <div className="z-10 flex h-fit w-full flex-col gap-4">
            <input
              type="text"
              className="h-fit w-full rounded-md border border-white/30 bg-transparent px-4 py-2 placeholder-white/40"
              placeholder="Type Email"
            ></input>
            <button className="btn-primary w-full bg-white py-2 text-black">
              Join Waitlist
            </button>
          </div>
          <p className="z-10 text-sm font-light text-white/70">
            Trusted by top innovative teams
          </p>
          <div className="z-10 py-2">
            <ul className="flex h-10 w-max items-center gap-x-8">
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
        <div className="absolute inset-0 z-0 h-screen rounded-b-3xl bg-mobileEllipse bg-cover"></div>
      </section>
    </>
  );
};

export default Hero;
