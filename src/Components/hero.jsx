const Hero = () => {
  return (
    <>
      <section className="relative overflow-x-hidden bg-cover bg-center bg-hero-pattern-mobile bg-opacity-35 w-screen h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-black/30"></div>
        <div className=" h-screen px-10 flex flex-col gap-7 justify-center items-center">
          <div className="rounded-full z-10 bg-black self-start py-2 px-3 border-2 border-white/10  flex items-center gap-2 ">
            <div className="rounded-full px-1 text-[10px] bg-AI-Purple ">
              <p className="text-black font-bold">NEW</p>
            </div>
            <div>
              <p className="text-AI-Purple text-base">
                Latest integration just arrived
              </p>
            </div>
          </div>
          <h1 className=" z-10 leading-tight font-medium bg-gradient-to-br from-gray-700 from-0% to-40% to-white bg-clip-text text-[54px] text-transparent">
            Elevate your SEO efforts.
          </h1>
          <p className="text-white/70 z-10 text-lg leading-relaxed font-light">
            Elevate your site’s visibility effortlessly with AI, where smart
            technology meets user-friendly SEO tools.
          </p>
          <div className="flex flex-col w-full h-fit gap-4 z-10">
            <input
              type="text"
              className="bg-transparent border  border-white/30 placeholder-white/40 rounded-md py-2 px-4 w-full h-fit"
              placeholder="Type Email"
            ></input>
            <button className="btn-primary w-full py-2 bg-white text-black">
              Join Waitlist
            </button>
          </div>
          <p className="text-sm z-10 font-light text-white/70">
            Trusted by top innovative teams
          </p>
          <div className="z-10">
            <ul className="flex h-10 gap-8 w-max items-center">
              <li className="h-fit w-full">
                {" "}
                <img src="/acme.png" className="" />{" "}
              </li>
              <li className="h-fit w-full">
                {" "}
                <img src="/quantum.png" />{" "}
              </li>
              <li className=" h-fit w-full">
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
        <div className="absolute h-screen z-0 bg-mobileEllipse bg-cover inset-0 rounded-b-3xl"></div>
      </section>
    </>
  );
};

export default Hero;
