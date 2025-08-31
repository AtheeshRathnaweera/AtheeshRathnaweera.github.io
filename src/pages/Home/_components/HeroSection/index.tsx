import { Section } from "@/components";
import styles from "./index.module.css";

const HeroSection = () => {
  return (
    <Section id="home">
      <p className="text-white text-lg dark:text-white">
        Hi, my name is{" "}
        <span aria-hidden="true" className={styles["animate-wave"]}>
          👋
        </span>
        <span className="sr-only">Wave</span>
      </p>
      <h1 className="mt-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-7xl dark:text-white">
        Atheesh Rathnaweera.
      </h1>
      <h3
        className="mt-4 text-2xl font-semibold dark:text-white"
        style={{ maxWidth: "85%" }}
      >
        I’m a{" "}
        <span className="text-4xl font-semibold dark:text-white">
          Full-Stack Developer
        </span>{" "}
        from Sri Lanka who loves building intuitive digital experiences.
      </h3>
      <p
        className="mt-4 text-gray-500 dark:text-gray-400"
        style={{ maxWidth: "60%" }}
      >
        I’m passionate about learning new technologies and writing clean,
        maintainable code—I enjoy exploring random projects in my GitHub
        playground. Currently working as a Senior Software Engineer, I’m focused
        on creating human-centered products and growing my expertise in
        full-stack development.
      </p>
    </Section>
  );
};

export default HeroSection;
