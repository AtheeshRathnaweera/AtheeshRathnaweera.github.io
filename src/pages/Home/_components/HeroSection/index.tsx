import { Section } from "@/components";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/motionVariants";

const HeroSection = () => {
  return (
    <Section id="home">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.p className="md:text-lg dark:text-white" variants={fadeIn}>
          Hi, my name is{" "}
          <span aria-hidden="true" className={styles["animate-wave"]}>
            👋
          </span>
          <span className="sr-only">Wave</span>
        </motion.p>
        <motion.h1
          className="mt-4 text-4xl font-bold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-7xl max-w-full"
          variants={fadeIn}
        >
          Atheesh Rathnaweera.
        </motion.h1>
        <motion.h3
          className="mt-4 text-xl sm:text-2xl font-semibold dark:text-white leading-relaxed max-w-full sm:max-w-2xl md:max-w-2xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl"
          variants={fadeIn}
        >
          I’m a{" "}
          <span className="text-3xl sm:text-4xl font-semibold dark:text-white">
            Full-Stack Developer
          </span>{" "}
          from Sri Lanka who loves building intuitive digital experiences.
        </motion.h3>
        <motion.p
          className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed max-w-full sm:max-w-xl md:max-w-xl lg:max-w-2xl xl:max-w-2xl 2xl:max-w-5xl"
          variants={fadeIn}
        >
          I’m passionate about learning new technologies and writing clean,
          maintainable code—I enjoy exploring random projects in my GitHub
          playground. Currently working as a Senior Software Engineer, I’m
          focused on creating human-centered products and growing my expertise
          in full-stack development.
        </motion.p>
      </motion.div>
    </Section>
  );
};

export default HeroSection;
