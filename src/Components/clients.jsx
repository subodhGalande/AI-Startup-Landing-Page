const Clients = () => {
  return (
    <>
      <div className="relative w-full space-y-5 px-12 py-14 text-center text-white">
        <div className="absolute left-1/2 top-1/2 z-0 h-3/6 w-80 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#8C45FF] opacity-50 blur-3xl"></div>
        <h2 className="z-20 text-center text-2xl font-medium text-white">
          Our Clients
        </h2>
        <p className="relative z-20 pb-5 text-lg font-light">
          Hear firsthand how our solutions have boosted online success for users
          like you.
        </p>
        <div className="flex flex-col gap-y-4">
          <img src="/avatar.png" alt="" className="z-20 mx-auto h-44 w-44" />
          <p className="z-20 pt-6 text-lg font-medium text-white">
            ”This product has completely transformed how I manage my projects
            and deadlines”
          </p>
          <div className="">
            <p>Sesame Taylor</p>
            <p className="text-sm text-white/70">
              Digital Marketing Director @ Apex
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
