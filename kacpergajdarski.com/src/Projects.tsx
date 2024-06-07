import Styles from "./projects.module.css";

function Projects() {
    return (
        <section className={Styles.projects}>
            <div className={Styles.projectCard}>
                <div className={Styles.projectHeader}>
                    <h1 className={Styles.projectName}>Selected Projects</h1>
                    <div className={Styles.projectSlide}>
                        <div className={Styles.projectNext}>
                            <div></div>
                        </div>
                        <div className={Styles.projectBack}>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={Styles.projectImage}>
                    <ul>
                        <li className={Styles.projectActive}></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <span></span>
                </div>
            </div>
        </section>
    );
}

export default Projects;
