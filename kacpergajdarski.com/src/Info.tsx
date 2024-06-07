import Styles from "./info.module.css";

function InfoCard() {
    return (
        <section className={Styles.infocard}>
            <div className={Styles.leftbar}>
                <div className={Styles.avatar}></div>
            </div>
            <div className={Styles.rightbar}>
                <p>
                    Hi, i'm Kacper Gajdarski, a junior front-end developer based
                    in Scotland, UK. Currently in my fourth year of Computing
                    Science (Software Engineering) at Heriot-Watt University, I
                    specialize in React and Flutter, creating responsive,
                    user-friendly web and mobile applications.
                </p>
            </div>
        </section>
    );
}

export default InfoCard;
