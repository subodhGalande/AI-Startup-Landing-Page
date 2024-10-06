import { IoMenu } from "react-icons/io5";
import { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLenis } from "lenis/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbar = useRef();
  const mobileNav = useRef();
  const linkContainer = useRef();
  const linkSection = gsap.utils.selector(linkContainer);
  const lenis = useLenis();

  const links = [
    { name: "Features", path: "#features" },
    { name: "Testimonials", path: "#testimonials" },
    { name: "Pricing", path: "#pricing" },
    { name: "Contact", path: "#contact" },
  ];

  const scrollTo = (link) => {
    if (window.innerWidth > 390) {
      lenis?.scrollTo(link, {
        offset: -5,
      });
    } else {
      lenis?.scrollTo(link, {
        offset: -50,
      });
    }
  };

  const toggleMenu = (link) => {
    setIsOpen(!isOpen);
    scrollTo(link);
  };

  useGSAP(() => {
    gsap.from(navbar.current, {
      y: -100,
      duration: 1,
      opacity: 0,
      ease: "power2.out",
    });
  });

  useGSAP(
    () => {
      if (isOpen) {
        gsap
          .timeline()
          .from(mobileNav.current, {
            duration: 0.25,
            x: 50,
            opacity: 0,
            scalex: 0,
          })
          .from(linkSection(".links"), {
            x: 10,
            opacity: 0,
            stagger: 0.1,
          });
      }
    },
    { dependencies: [isOpen], scope: navbar },
  );

  return (
    <>
      <nav
        ref={navbar}
        className="fixed z-50 flex h-fit w-full justify-between bg-black px-4 py-4 backdrop-blur-xl sm:relative sm:mx-auto sm:mt-2 sm:w-fit sm:items-center sm:justify-around sm:rounded-xl sm:border-2 sm:border-white/10 sm:px-2 sm:py-2"
      >
        <img src="/Logo.png" height="38px" width="38px" alt="Logo" />+
        {/* Desktop Navigation */}
        <div className="hidden justify-center gap-x-8 px-14 text-sm text-white/70 sm:flex">
          {links.map((link, index) => (
            <button key={index} onClick={() => scrollTo(link.path)}>
              <a href={link.path}>{link.name}</a>
            </button>
          ))}
        </div>
        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-4">
          {/* Call to Action Button (Visible on both mobile and desktop) */}
          <div className="gap-4">
            <button className="btn-primary">Join Waitlist</button>
          </div>
          <button onClick={toggleMenu} className="text-white sm:hidden">
            {isOpen ? (
              <IoClose className="h-7 w-7" />
            ) : (
              <IoMenu className="h-7 w-7" />
            )}
          </button>
        </div>
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div
            ref={mobileNav}
            className="absolute left-0 top-full z-50 w-full overflow-hidden rounded-b-xl bg-black/50 backdrop-blur-3xl sm:hidden"
          >
            <div className="relative h-full w-full">
              <div className="absolute -top-44 right-6 z-0 h-80 w-80 rotate-90 rounded-full bg-black blur-3xl">
                {" "}
              </div>
              <p className="relative z-10 px-7 pt-8 text-white">Menu</p>
              <div
                ref={linkContainer}
                className="relative z-10 flex flex-col items-start gap-8 px-10 py-10 text-left text-xl font-light text-white/70"
              >
                {links.map((link, index) => (
                  <button key={index} onClick={() => toggleMenu(link.path)}>
                    <a href={link.path}>{link.name}</a>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
