import { useState } from "react";
import Modal from "./modal";

const Connect = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactEmail, setContactEmail] = useState("");

  const handleOnChange = (e) => setContactEmail(e.target.value);

  const handleModalOpen = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setContactEmail("");
  };
  return (
    <>
      <div
        id="contact"
        className="relative mx-auto flex h-fit w-11/12 flex-col items-center justify-around space-y-10 overflow-clip rounded-xl border-2 border-white/10 sm:mt-32 sm:h-[500px] sm:w-4/6 sm:justify-center sm:gap-y-6 sm:space-y-0"
      >
        <div className="absolute -top-40 z-10 h-5/6 w-full rotate-90 rounded-full bg-[#361764] blur-3xl sm:hidden"></div>
        <div className="absolute inset-0 z-0 bg-hero-pattern-mobile bg-cover opacity-40 sm:bg-hero-pattern-desktop"></div>
        <div className="absolute z-10 h-full w-full bg-gradient-to-t from-black to-transparent to-50%"></div>
        <div className="absolute -top-60 z-10 h-full w-2/3 rounded-full bg-[#361764]/70 blur-3xl"></div>
        <div className="absolute h-full w-full bg-stars-desktop bg-contain"></div>

        <h1 className="relative z-10 text-center text-4xl font-medium text-white sm:h-fit sm:w-1/2 sm:text-5xl sm:leading-[3.5rem]">
          AI-driven SEO for Everyone
        </h1>
        <form
          onSubmit={handleModalOpen}
          className="relative z-10 flex h-fit w-full flex-col gap-4 px-8 sm:w-fit sm:flex-row sm:gap-0"
        >
          <input
            type="email"
            className="h-fit w-full rounded-l-md border border-white/30 bg-transparent px-4 py-2 text-white placeholder-white/40 sm:w-fit"
            placeholder="Type Email"
            required
            onChange={(e) => handleOnChange(e)}
          ></input>
          <button
            type="submit"
            className="btn-primary w-full rounded-l-none rounded-r-md bg-white py-2 text-black sm:w-fit"
          >
            Join Waitlist
          </button>
        </form>
        <p className="z-10 pb-8 text-center text-sm text-white/70 sm:pb-0">
          No credit card required | 7-days free trial
        </p>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p className="">
          Check inbox at <strong>{contactEmail} </strong>
          for confirmation, we’ll be in touch soon!
        </p>
      </Modal>
    </>
  );
};

export default Connect;
