import { useRef } from "react";
import "./App.css";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import InfoCard from "./Info.tsx";
import Navbar from "./Nav.tsx";
import Projects from "./Projects.tsx";
import LandingPage from "./landing-page.tsx";

function App() {
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

  return (
    <>
      <Navbar
        scrollToProjects={scrollToProjects}
        scrollToFooter={scrollToFooter}
      />
      <LandingPage />
      <Header />
      <InfoCard />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
}

export default App;
