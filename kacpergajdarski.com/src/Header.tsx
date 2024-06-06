import Styles from "./header.module.css";

function Header() {
    return (
        <section>
            <div className={Styles.infobar}>
                <aside className={Styles.leftbar}>
                    <h1>Front-end Developer</h1>
                    <p>
                        Junior front-end developer with expertise in React and
                        Flutter, adept at creating responsive web and mobile
                        applications. Passionate about UI/UX design and
                        delivering seamless user experiences.
                    </p>
                    <a className={Styles.button}>Contact</a>
                </aside>

                <div className={Styles.rightbar}>
                    <div className={Styles.square}></div>
                </div>
            </div>
        </section>
    );
}

export default Header;
