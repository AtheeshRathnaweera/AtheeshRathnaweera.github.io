import { githubIcon, linkedinIcon, redditIcon, twitterIcon } from "@/assets";

const SocialSideBar = () => {
  return (
    <aside className="w-20 sm:w-15 bg-[var(--color-bg)] flex flex-col items-center py-12 overflow-hidden fixed left-0 h-screen z-10 text-white gap-6 justify-end">
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="my-2"
      >
        <img
          src={githubIcon}
          alt="GitHub"
          className="w-6 h-6 invert inline-block"
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
          className="w-6 h-6 invert inline-block"
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
          className="w-6 h-6 invert inline-block"
        />
      </a>
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="my-2"
      >
        <img
          src={redditIcon}
          alt="Reddit"
          className="w-6 h-6 invert inline-block"
        />
      </a>
    </aside>
  );
};

export default SocialSideBar;
