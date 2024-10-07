const Loader = ({ percent }) => {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <p className="h-fit w-fit text-white">loading...{percent}</p>
      </div>
    </>
  );
};

export default Loader;
