import React from "react";
import Styles from "./nav.module.css";

interface NavbarProps {
    scrollToProjects: () => void;
    scrollToFooter: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
    scrollToProjects,
    scrollToFooter,
}) => {
    return (
        <nav>
            <div className={Styles.copyright}>
                <a>&copy; Kacpergajdarski</a>
            </div>
            <div className={Styles.navContent}>
                <p onClick={scrollToFooter}>Contact</p>
                <p onClick={scrollToProjects}>Projects</p>
            </div>
        </nav>
    );
};

export default Navbar;
