import Styles from "./footer.module.css";

function Footer() {
    return (
        <section className={Styles.footer}>
            <div className={Styles.footerContact}>
                <h1>Have a cool project?</h1>
                <a href="" className={Styles.button}>
                    Contact Me
                </a>
            </div>
            <div className={Styles.hDivider}></div>
            <div className={Styles.footerFinal}>
                <div className={Styles.footerInfo}>
                    <div className={Styles.footerAvatar}></div>
                    <div className={Styles.footerProfile}>
                        <div className={Styles.footerPerson}>
                            Kacper Gajdarski
                        </div>
                        <div className={Styles.footerLocation}>
                            Based In Edinburgh
                        </div>
                    </div>
                </div>
                <div className={Styles.footerLinks}>
                    <ul>
                        <li>Navigation</li>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Projects</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                    <ul>
                        <li>Contact</li>
                        <li>
                            <a href="">LinkedIn</a>
                        </li>
                        <li>
                            <a href="">Instagram</a>
                        </li>
                        <li>
                            <a href="">Website</a>
                        </li>
                        <li>
                            <a href="">Email</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={Styles.hDivider}></div>
            <div className={Styles.footerCopyright}>
                <p>2024</p>
                <div className={Styles.vDivider}></div>
                <p>Kacper Gajdarski</p>
            </div>
        </section>
    );
}

export default Footer;
