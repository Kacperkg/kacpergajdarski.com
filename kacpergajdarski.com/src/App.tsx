import "./App.css";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import InfoCard from "./Info.tsx";
import Navbar from "./Nav.tsx";
import Projects from "./Projects.tsx";

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <InfoCard />
            <Projects />
            <Footer />
        </>
    );
}

export default App;
