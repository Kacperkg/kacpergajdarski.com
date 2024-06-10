import { Link } from "@react-email/components";
import Styles from "./info.module.css";

function InfoCard() {
    return (
        <section className={Styles.infocard}>
            <h1>
                Hi, i'm Kacper Gajdarski, a junior front-end developer based in
                uk
            </h1>
            <p className={Styles.infoBio}>
                Currently in my fourth year of Computing Science (Software
                Engineering) at Heriot-Watt University, I specialize in React
                and Flutter, creating responsive, user-friendly web and mobile
                applications.
            </p>

            <Link
                href="mailto: contact@kacpergajdarski.com"
                className={Styles.infoContact}>
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
        </section>
    );
}

export default InfoCard;
