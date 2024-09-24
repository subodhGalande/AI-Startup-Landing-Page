import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav className=" w-full flex justify-between px-4 h-fit bg-black border-b-2 border-white/10 py-4">
        <img src="../src/assets/Logo.png" height="38px" width="38px" alt="" />
        <div className="flex gap-4">
          <button className="btn-primary">Join Waitlist</button>
          <button>
            <IoMenu className="text-white h-7 w-7" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
