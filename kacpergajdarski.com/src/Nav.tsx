import Styles from "./nav.module.css";

function Navbar() {
    return (
        <nav>
            <div className={Styles.copyright}>
                <a>&copy;Kacpergajdarski</a>
            </div>
            <div className={Styles.navContent}>
                <a href="">Contact</a>
                <a href="">Projects</a>
            </div>
        </nav>
    );
}

export default Navbar;
