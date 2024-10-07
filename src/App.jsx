import Hero from "./Components/hero";
import Navbar from "./Components/navbar";
import Highlights from "./Components/highlights";
import Rankings from "./Components/rankings";
import Clients from "./Components/clients";
import Pricing from "./Components/pricing";
import Connect from "./Components/connect";
import Footer from "./Components/footer";
import Loader from "./Components/loader";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";

function App() {
  const lenisRef = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
    };
  });

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
      {isLoading && <Loader />}
      {!isLoading && (
        <ReactLenis ref={lenisRef} root autoRaf={false}>
          <Navbar />
          <Hero />
          <Highlights />
          <Rankings />
          <Clients />
          <Pricing />
          <Connect />
          <Footer />
        </ReactLenis>
      )}
    </>
  );
}

export default App;
