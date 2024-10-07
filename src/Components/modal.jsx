import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IoMdCloseCircle } from "react-icons/io";

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);
  const backdropRef = useRef(null);
  const imageRef = useRef();
  const modalContentRef = useRef();

  useGSAP(
    () => {
      gsap.from(backdropRef.current, {
        opacity: 0,
      });

      gsap
        .timeline()
        .from(modalRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.25,
          ease: "power2.out",
        })
        .from(imageRef.current, {
          scale: 0,
          duration: 0.75,
          rotate: 90,
          ease: "power1.inOut",
        })
        .from(
          modalContentRef.current,
          {
            duration: 1,
            opacity: 0,
            ease: "power1.Out",
          },
          "-=.25",
        )
        .to(imageRef.current, {
          y: -10,
          duration: 1.5,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        });
    },
    { dependencies: [isOpen] },
  );
  if (!isOpen) return null;

  return createPortal(
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
    >
      <div
        ref={modalRef}
        className="shadow-lg relative flex h-fit w-11/12 flex-col items-center justify-center rounded-xl bg-black p-8 sm:h-fit sm:w-1/3"
      >
        {/* pattern and gradient */}
        <div className="absolute inset-0 z-10 h-full w-full rounded-xl bg-gradient-to-t from-[#361764]/50 to-black to-70%"></div>
        <div className="absolute inset-0 z-0 h-full w-full bg-hero-pattern-mobile bg-contain opacity-65 sm:bg-hero-pattern-desktop"></div>
        <div></div>
        <div className="absolute right-4 top-5 z-20 text-AI-Purple">
          <button onClick={onClose}>
            <IoMdCloseCircle className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>

        {/* modal content */}

        <div className="z-20 flex flex-col items-center justify-center">
          <div className="z-20 h-32 w-32 sm:h-44 sm:w-44">
            <img
              ref={imageRef}
              src="/holo-star.png"
              height="100%"
              width="100%"
            />
          </div>
          <div
            ref={modalContentRef}
            className="relative z-20 flex flex-col text-center"
          >
            <h1 className="text-2xl font-medium text-white">
              Welcome to the Future!
            </h1>
            <p className="text-white/70">You’ve secured a spot!</p>
            <div className="mt-4 px-2 text-xs text-white sm:text-base">
              {children}
            </div>
          </div>
        </div>

        {/* <button
          onClick={onClose}
          className="btn-primary z-20 w-full self-center sm:w-fit sm:px-4 sm:py-2"
        >
          close
        </button> */}
      </div>
    </div>,
    document.getElementById("modal-root"),
  );
};

export default Modal;
