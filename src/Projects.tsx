import { Link } from "@react-email/components";
import { useRef, useState } from "react";
import comingsoon from "./assets/comingsoon.jpg";
import wideidea1 from "./assets/wideidea1.jpg";
import Styles from "./projects.module.css";

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);

    const images = [
        {
            id: 1,
            url: "https://kacperkg.github.io/wideidea/",
            image: wideidea1,
            name: "WideIdea",
            description:
                "Welcome to WideIdea, a premier specialist entertainment agency dedicated to delivering exceptional experiences.",
        },
        {
            id: 2,
            url: "",
            image: comingsoon,
            name: "Coming Soon",
            description: "",
        },
    ];

    const handleClick = (direction: "next" | "prev") => {
        let newIndex: number;
        if (direction === "next") {
            newIndex = (currentIndex + 1) % images.length;
        } else {
            newIndex = (currentIndex - 1 + images.length) % images.length;
        }
        setCurrentIndex(newIndex);

        if (ref.current) {
            const containerWidth = ref.current.offsetWidth;
            ref.current.scrollTo({
                left: containerWidth * newIndex * 0.8,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className={Styles.projectsSection}>
            <div className={Styles.projectContainer} ref={ref}>
                {images.map((image, index) => (
                    <Link
                        href={image.url}
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
                                backgroundImage: `url(${image.image})`,
                                width: "80vw",
                            }}
                        />
                    </Link>
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
                            height="50"
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
                            width="104"
                            height="50"
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
