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
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    const totalResources = images.length;

    if (totalResources === 0) {
      setPercentage(100);
      setTimeout(() => setIsLoading(false), 100);
      return;
    }

    let loadedResources = 0;

    const updateProgress = () => {
      loadedResources++;
      const percent = Math.floor((loadedResources / totalResources) * 100);
      setPercentage(percent);

      if (loadedResources === totalResources) {
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        updateProgress();
      } else {
        img.addEventListener("load", updateProgress);
        img.addEventListener("error", updateProgress);
      }
    });

    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
      images.forEach((img) => {
        img.removeEventListener("load", updateProgress);
        img.removeEventListener("error", updateProgress);
      });
    };
  }, []); // Dependency array ensures this runs only once after component mount

  return (
    <>
      {isLoading && <Loader percent={percentage} />}
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
