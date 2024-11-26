import { useEffect, useRef, useState } from "react";
import "./App.css";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import InfoCard from "./Info.tsx";
import Navbar from "./Nav.tsx";
import Projects from "./Projects.tsx";
import LandingPage from "./landing-page.tsx";

function App() {
  const [landingPageVisible, setLandingPageVisible] = useState(true);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (landingPageVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [landingPageVisible]);

  const handleLandingPageComplete = () => {
    setLandingPageVisible(false);
  };

  return (
    <>
      <Navbar
        scrollToProjects={scrollToProjects}
        scrollToFooter={scrollToFooter}
      />
      {landingPageVisible && (
        <LandingPage onComplete={handleLandingPageComplete} />
      )}
      {!landingPageVisible && (
        <>
          <Header />
          <InfoCard />
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={footerRef}>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;
