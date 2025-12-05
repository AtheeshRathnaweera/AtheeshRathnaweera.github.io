import { githubIcon, linkedinIcon, redditIcon, twitterIcon } from "@/assets";

const SocialSideBar = () => {
  return (
    <aside className="w-15 flex flex-col items-center py-12 overflow-hidden fixed left-0 h-screen z-10 dark:text-white gap-6 justify-end sm:w-20 lg:w-30 xl:w-40 2xl:w-50">
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="my-2 2xl:my-5"
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
        className="my-2 2xl:my-5"
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
        className="my-2 2xl:my-5"
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
        className="my-2 2xl:my-5"
      >
        <img
          src={redditIcon}
          alt="Reddit"
          className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 inline-block filter brightness-0 saturate-0 opacity-70 dark:invert dark:opacity-100"
        />
      </a>
    </aside>
  );
};

export default SocialSideBar;
