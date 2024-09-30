const Clients = () => {
  return (
    <>
      <div className="relative mx-auto space-y-5 px-12 py-14 text-center text-white sm:w-10/12">
        <h2 className="z-20 text-center text-3xl font-medium text-white sm:text-6xl">
          What people say
        </h2>
        <p className="text relative z-20 pb-5 font-light sm:mx-auto sm:w-1/3 sm:text-xl">
          Hear firsthand how our solutions have boosted online success for users
          like you.
        </p>
        <div className="sm:flex sm:gap-x-9">
          {" "}
          <div className="relative flex h-fit w-80 flex-col gap-y-4 overflow-clip rounded-xl border-2 border-white/10 px-6 py-8">
            <div className="absolute -inset-10 z-0 h-64 w-64 rounded-full border bg-[#8C45FF]/30 blur-3xl"></div>
            <img src="/avatar1.png" alt="" className="h-26 z-0 w-24" />
            <div className="z-10 text-left">
              <p>Sesame Taylor</p>
              <p className="text-sm text-white/70">
                Digital Marketing Director @ Apex
              </p>
            </div>
            <p className="text z-20 text-left font-medium text-white sm:text-xl">
              ”This product has completely transformed how I manage my projects
              and deadlines”
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
