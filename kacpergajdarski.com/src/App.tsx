import React, { useRef } from "react";
import "./App.css";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import InfoCard from "./Info.tsx";
import Navbar from "./Nav.tsx";
import Projects from "./Projects.tsx";

function App() {
    const projectsRef = useRef(null);
    const footerRef = useRef(null);

    const scrollToProjects = () => {
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Navbar
                scrollToProjects={scrollToProjects}
                scrollToFooter={scrollToFooter}
            />
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
