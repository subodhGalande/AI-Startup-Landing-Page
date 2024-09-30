import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav className="flex h-fit w-full justify-between border-b-2 border-white/10 bg-black px-4 py-4 sm:mx-auto sm:mt-2 sm:w-fit sm:items-center sm:justify-around sm:rounded-xl sm:border-2 sm:px-2 sm:py-2">
        <img src="/Logo.png" height="38px" width="38px" alt="" />
        <div className="hidden justify-center gap-x-8 px-14 text-sm text-white/70 sm:visible sm:flex">
          <p>Features</p>
          <p>Developers</p>
          <p>Company</p>
          <p>Blog</p>
          <p>Changelogs</p>
        </div>
        <div className="flex gap-4">
          <button className="btn-primary">Join Waitlist</button>
          <button className="sm:hidden">
            <IoMenu className="h-7 w-7 text-white" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
