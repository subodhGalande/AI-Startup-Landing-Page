import Hero from "./Components/hero";
import Navbar from "./Components/navbar";
import Highlights from "./Components/highlights";
import Rankings from "./Components/rankings";
import Clients from "./Components/clients";
import Pricing from "./Components/pricing";
import Connect from "./Components/connect";
import Footer from "./Components/footer";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <Rankings />
      <Clients />
      <Pricing />
      <Connect />
      <Footer />
    </>
  );
}

export default App;
