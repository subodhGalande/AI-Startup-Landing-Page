const Connect = () => {
  return (
    <>
      <div className="relative mx-auto flex h-fit w-11/12 flex-col items-center justify-around space-y-10 overflow-clip rounded-xl border-2 border-white/10">
        <div className="absolute -top-40 z-10 h-5/6 w-full rotate-90 rounded-full bg-[#361764] blur-3xl"></div>
        <div className="absolute inset-0 z-0 bg-hero-pattern-mobile bg-cover bg-center opacity-40"></div>
        <h1 className="relative z-10 text-center text-4xl text-white">
          AI-driven SEO for Everyone
        </h1>
        <div className="relative z-10 flex h-fit w-full flex-col gap-4 px-8">
          <input
            type="text"
            className="h-fit w-full rounded-md border border-white/30 bg-transparent px-4 py-2 placeholder-white/40"
            placeholder="Type Email"
          ></input>
          <button className="btn-primary w-full bg-white py-2 text-black">
            Join Waitlist
          </button>
        </div>
        <p className="pb-8 text-center text-sm text-white/70">
          No credit card required | 7-days free trial
        </p>
      </div>
    </>
  );
};

export default Connect;
