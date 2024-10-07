const Loader = ({ percent }) => {
  return (
    <>
      <div className="flex h-screen w-screen items-end justify-end">
        <div className="h-fit w-fit bg-gradient-to-br from-black to-AI-Purple bg-clip-text px-10 py-10">
          {" "}
          <p className="h-fit w-fit text-6xl font-black text-transparent sm:text-9xl">
            {percent}%
          </p>
        </div>
      </div>
    </>
  );
};

export default Loader;
