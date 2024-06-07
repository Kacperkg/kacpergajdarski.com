import Styles from "./projects.module.css";

function Projects() {
    return (
        <section className={Styles.projects}>
            <div className={Styles.projectCard}>
                <div className={Styles.projectHeader}>
                    <h1 className={Styles.projectName}>Project #1</h1>
                    <div className={Styles.projectSlide}>
                        <div className={Styles.projectNext}>
                            <div></div>
                        </div>
                        <div className={Styles.projectBack}>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={Styles.projectImage}></div>
            </div>
            <div className={Styles.projectCard}>
                <div className={Styles.projectHeader}>
                    <h1 className={Styles.projectName}>Project #2</h1>
                    <div className={Styles.projectSlide}>
                        <div className={Styles.projectNext}>
                            <div></div>
                        </div>
                        <div className={Styles.projectBack}>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={Styles.projectImage}></div>
            </div>
        </section>
    );
}

export default Projects;
