import { Link } from "@react-email/components";
import { motion } from "framer-motion";
import Styles from "./header.module.css";

function Header() {
  return (
    <section className={Styles.header}>
      <motion.div
        className={Styles.headerTitle}
        variants={{
          hidden: { opacity: 0, y: -105 },
          visable: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visable"
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        kacper gajdarski
      </motion.div>
      <motion.div
        className={Styles.bio}
        variants={{
          hidden: { opacity: 0, y: 105 },
          visable: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visable"
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
      >
        <p>
          Final Year Computing Science Studnet @ Heriot-Watt University. Based
          in Edinburgh, Scotland, UK. Aspired Front-End Developer
        </p>
        {Email()}
      </motion.div>
    </section>
  );
}

const Email = () => {
  return (
    <Link
      href="mailto: contact@kacpergajdarski.com"
      className={Styles.headerContact}
    >
      <p>get in touch</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path d="M1 13H13M13 13V1M13 13L1 1" stroke="white" stroke-width="2" />
      </svg>
    </Link>
  );
};

export default Header;
