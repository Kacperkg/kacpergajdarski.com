import { Link } from "@react-email/components";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Styles from "./info.module.css";

function InfoCard() {
    const controls = useAnimation();
    const slideControls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView, controls, slideControls]);

    return (
        <>
            <motion.section
                ref={ref}
                className={Styles.infocard}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{
                    duration: 0.8,
                    delay: 0.4,
                }}>
                <h1>
                    Hi, I'm Kacper Gajdarski, a junior front-end developer based
                    in UK
                </h1>
                <p className={Styles.infoBio}>
                    Currently in my fourth year of Computing Science (Software
                    Engineering) at Heriot-Watt University, I specialize in
                    React and Flutter, creating responsive, user-friendly web
                    and mobile applications.
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
                            strokeWidth="2"
                        />
                    </svg>
                </Link>
            </motion.section>
        </>
    );
}

export default InfoCard;
