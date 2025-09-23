import { githubIcon, linkedinIcon, redditIcon, twitterIcon } from "@/assets";

const SocialSideBar = () => {
  return (
    <aside className="w-15 flex flex-col items-center py-12 overflow-hidden fixed left-0 h-screen z-10 dark:text-white gap-6 justify-end sm:w-20 lg:w-30 xl:w-40">
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="my-2"
      >
        <img
          src={githubIcon}
          alt="GitHub"
          className="w-6 h-6 inline-block filter brightness-0 saturate-0 opacity-70 dark:invert dark:opacity-100"
        />
      </a>
      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="my-2"
      >
        <img
          src={linkedinIcon}
          alt="Linkedin"
          className="w-6 h-6 inline-block filter brightness-0 saturate-0 opacity-70 dark:invert dark:opacity-100"
        />
      </a>
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="my-2"
      >
        <img
          src={twitterIcon}
          alt="Twitter"
          className="w-6 h-6 inline-block filter brightness-0 saturate-0 opacity-70 dark:invert dark:opacity-100"
        />
      </a>
      <a
        href="https://www.reddit.com/user/atheesh27/"
        target="_blank"
        rel="noopener noreferrer"
        className="my-2"
      >
        <img
          src={redditIcon}
          alt="Reddit"
          className="w-6 h-6 inline-block filter brightness-0 saturate-0 opacity-70 dark:invert dark:opacity-100"
        />
      </a>
    </aside>
  );
};

export default SocialSideBar;
