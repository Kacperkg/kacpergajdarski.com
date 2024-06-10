import Styles from "./projects.module.css";

function Projects() {
    return (
        <section className={Styles.projectsSection}>
            <div className={Styles.projectContainer}>
                <div className={Styles.projects}>
                    <div className={Styles.projectImage}></div>
                </div>
                <div className={Styles.projects}>
                    <div className={Styles.projectPreview}></div>
                </div>
            </div>
            <div className={Styles.projectDesc}>
                <h1>PROJECT NAME</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    nec massa eget eros lacinia pellentesque id at mi. Maecenas
                    rhoncus quis dui sit amet finibus.
                </p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="209"
                    height="22"
                    viewBox="0 0 209 22"
                    fill="none">
                    <path d="M198 1L208 11L198 21" stroke="white" />
                    <path d="M208 11L114 11" stroke="white" />
                    <path d="M11 21L1 11L11 0.999999" stroke="white" />
                    <path d="M0.999996 11H94" stroke="white" />
                </svg>
            </div>
        </section>
    );
}

export default Projects;
