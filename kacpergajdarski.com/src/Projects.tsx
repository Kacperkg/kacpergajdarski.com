import React, { useRef, useState } from "react";
import backgroundImage from "./assets/gabor-papp-9PBJr66VJwU-unsplash.jpg";
import test2 from "./assets/test2.png";
import test1 from "./assets/testProsche.png";
import Styles from "./projects.module.css";

function Projects() {
    const ref = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        {
            id: 1,
            url: test1,
            name: "Project One",
            description: "Description for project one.",
        },
        {
            id: 2,
            url: test2,
            name: "Project Two",
            description: "Description for project two.",
        },
        {
            id: 3,
            url: test1,
            name: "Project Three",
            description: "Description for project three.",
        },
        {
            id: 4,
            url: test2,
            name: "Project Four",
            description: "Description for project four.",
        },
        {
            id: 5,
            url: test1,
            name: "Project Five",
            description: "Description for project five.",
        },
        {
            id: 6,
            url: test2,
            name: "Project Six",
            description: "Description for project six.",
        },
    ];

    const handleClick = (direction) => {
        let newIndex;
        if (direction === "next") {
            newIndex = (currentIndex + 1) % images.length;
            setCurrentIndex(newIndex);
        } else if (direction === "prev") {
            newIndex = (currentIndex - 1 + images.length) % images.length;
            setCurrentIndex(newIndex);
        }
        const containerWidth = ref.current.offsetWidth;
        ref.current.scrollTo({
            left: containerWidth * newIndex * 0.8,
            behavior: "smooth",
        });
    };

    return (
        <section className={Styles.projectsSection}>
            <div className={Styles.projectContainer} ref={ref}>
                {images.map((image, index) => (
                    <div
                        className={Styles.projects}
                        key={image.id}
                        style={{
                            filter:
                                index !== currentIndex
                                    ? "grayscale(100%)"
                                    : "none",
                        }}>
                        <div
                            className={Styles.projectImage}
                            style={{
                                backgroundImage: `url(${image.url})`,
                                width: "80vw", // Set width to 80vw
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Project Description */}
            <div className={Styles.projectDesc}>
                <h1>{images[currentIndex].name}</h1>
                <p>{images[currentIndex].description}</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="209"
                    height="22"
                    viewBox="0 0 209 22"
                    fill="none">
                    <g>
                        <rect
                            x="0"
                            y="0"
                            width="104"
                            height="22"
                            fill="transparent"
                            onClick={() => handleClick("prev")}
                        />
                        <path d="M11 21L1 11L11 0.999999" stroke="white" />
                        <path d="M0.999996 11H94" stroke="white" />
                    </g>
                    <g>
                        <rect
                            x="104"
                            y="0"
                            width="105"
                            height="22"
                            fill="transparent"
                            onClick={() => handleClick("next")}
                        />
                        <path d="M198 1L208 11L198 21" stroke="white" />
                        <path d="M208 11L114 11" stroke="white" />
                    </g>
                </svg>
            </div>
        </section>
    );
}

export default Projects;
