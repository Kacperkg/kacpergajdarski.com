import { Link } from "@react-email/components";
import Styles from "./header.module.css";
function Header() {
    return (
        <section className={Styles.header}>
            <h1 className={Styles.headerTitle}>kacper gajdarski</h1>
            <div className={Styles.bio}>
                <p>
                    Junior front-end developer with expertise in React and
                    Flutter, adept at creating responsive web and mobile
                    applications. Passionate about UI/UX design and delivering
                    seamless user experiences.
                </p>
                {Email()}
            </div>

            <div className={Styles.headerImage}></div>
        </section>
    );
}

const Email = () => {
    return (
        <Link
            href="mailto: contact@kacpergajdarski.com"
            className={Styles.headerContact}>
            <p>get in touch</p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none">
                <path
                    d="M1 13H13M13 13V1M13 13L1 1"
                    stroke="white"
                    stroke-width="2"
                />
            </svg>
        </Link>
    );
};

export default Header;
