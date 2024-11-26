import { useEffect, useRef, useState } from "react";
import comingsoon from "./assets/comingsoon.jpg";
import wideidea1 from "./assets/wideidea1.jpg";
import Styles from "./projects.module.css";

function Projects() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const scrollToImage = (index) => {
    if (ref.current) {
      const container = ref.current;
      const children = Array.from(container.children) as HTMLElement[];

      const targetChild = children[index];
      if (targetChild) {
        const containerCenter = container.offsetWidth / 2;
        const childCenter =
          targetChild.offsetLeft + targetChild.offsetWidth / 2;
        const scrollPosition = childCenter - containerCenter;

        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const handleScroll = () => {
    if (ref.current) {
      const container = ref.current;
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      const children = Array.from(container.children) as HTMLElement[];

      children.forEach((child, index) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;

        const distance = Math.abs(containerCenter - childCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [activeIndex]);

  console.log("Active Index:", activeIndex);

  return (
    <section className={Styles.projectsSection}>
      <h1>Personal Projects</h1>

      <div className={Styles.projectContainer} ref={ref}>
        {images.map((image) => (
          <div className={Styles.projects} key={image.id}>
            <div
              className={Styles.projectImage}
              style={{
                backgroundImage: `url(${image.image})`,
              }}
            />
            <h2>{image.name}</h2>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className={Styles.selectors}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${Styles.dot} ${
              activeIndex === index ? Styles.active : ""
            }`}
            onClick={() => scrollToImage(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
