import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav className="flex h-fit w-full justify-between border-b-2 border-white/10 bg-black px-4 py-4">
        <img src="/Logo.png" height="38px" width="38px" alt="" />
        <div className="flex gap-4">
          <button className="btn-primary">Join Waitlist</button>
          <button>
            <IoMenu className="h-7 w-7 text-white" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
