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
    // Function to handle image loading
    const loadImages = () => {
      const images = document.querySelectorAll("img");
      const totalResources = images.length;
      console.log(percentage);

      if (totalResources === 0) {
        setPercentage(100);
        setTimeout(() => setIsLoading(false), 500);
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
          setInterval(() => updateProgress(), 1000);
        } else {
          img.addEventListener("load", updateProgress);
          img.addEventListener("error", updateProgress);
        }
      });

      // Cleanup on unmount
      return () => {
        images.forEach((img) => {
          img.removeEventListener("load", updateProgress);
          img.removeEventListener("error", updateProgress);
        });
      };
    };

    // Call loadImages to start tracking images
    loadImages();

    // GSAP ticker for smooth scroll library
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    // Cleanup on component unmount
    return () => {
      gsap.ticker.remove(update);
    };
  }, []); // Empty dependency array means this runs once after initial render

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
