import { slideInRight } from "@/animations/motionVariants";
import { githubIcon, linkedinIcon, redditIcon, twitterIcon } from "@/assets";
import { motion } from "framer-motion";

const EmailSideBar = () => {
  return (
    <motion.aside
      variants={slideInRight}
      initial="hidden"
      animate="visible"
      className="w-15 flex flex-col items-center py-12 overflow-hidden fixed right-0 h-screen z-10 dark:text-white justify-end sm:w-20 lg:w-30 xl:w-40 2xl:w-50 2xl:py-15"
    >
      <span
        className="text-[0.8rem] sm:text-[0.9rem] 2xl:text-[1rem] whitespace-nowrap tracking-[2px] text-gray-600 dark:text-white"
        style={{
          writingMode: "vertical-lr",
          textOrientation: "mixed",
        }}
      >
        rathnaweeraatheesh72@gmail.com
      </span>
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="block sm:hidden mt-8 mb-4"
      >
        <img
          src={githubIcon}
          alt="GitHub"
          className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 inline-block filter brightness-0 saturate-0 opacity-70 dark:invert dark:opacity-100"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/atheeshrathnaweera/"
        target="_blank"
        rel="noopener noreferrer"
        className="block sm:hidden my-4"
      >
        <img
          src={linkedinIcon}
          alt="Linkedin"
          className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 inline-block filter brightness-0 saturate-0 opacity-70 dark:invert dark:opacity-100"
        />
      </a>
      <a
        href="https://x.com/AtheeshRathnaw2"
        target="_blank"
        rel="noopener noreferrer"
        className="block sm:hidden my-4"
      >
        <img
          src={twitterIcon}
          alt="Twitter"
          className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 inline-block filter brightness-0 saturate-0 opacity-70 dark:invert dark:opacity-100"
        />
      </a>
      <a
        href="https://www.reddit.com/user/atheesh27/"
        target="_blank"
        rel="noopener noreferrer"
        className="block sm:hidden mt-4"
      >
        <img
          src={redditIcon}
          alt="Reddit"
          className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 inline-block filter brightness-0 saturate-0 opacity-70 dark:invert dark:opacity-100"
        />
      </a>
    </motion.aside>
  );
};

export default EmailSideBar;
