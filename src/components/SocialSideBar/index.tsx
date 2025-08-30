import githubIcon from "@/assets/github.svg";
import linkedinIcon from "@/assets/linkedin.svg";
import twitterIcon from "@/assets/twitter.svg";
import redditIcon from "@/assets/reddit.svg";

const SocialSideBar = () => {
  return (
    <aside
      style={{
        width: "80px",
        background: "var(--color-bg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "3rem 0",
        overflow: "hidden",
        position: "fixed",
        left: 0,
        height: "100vh",
        zIndex: 10,
        color: "#fff",
        gap: "1.5rem",
        justifyContent: "flex-end",
      }}
    >
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "0.5rem 0" }}
      >
        <img
          src={githubIcon}
          alt="GitHub"
          style={{
            width: "24px",
            height: "24px",
            filter: "invert(1)",
            display: "inline-block",
          }}
        />
      </a>
      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "0.5rem 0" }}
      >
        <img
          src={linkedinIcon}
          alt="Linkedin"
          style={{
            width: "24px",
            height: "24px",
            filter: "invert(1)",
            display: "inline-block",
          }}
        />
      </a>
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "0.5rem 0" }}
      >
        <img
          src={twitterIcon}
          alt="Twitter"
          style={{
            width: "24px",
            height: "24px",
            filter: "invert(1)",
            display: "inline-block",
          }}
        />
      </a>
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "0.5rem 0" }}
      >
        <img
          src={redditIcon}
          alt="Reddit"
          style={{
            width: "24px",
            height: "24px",
            filter: "invert(1)",
            display: "inline-block",
          }}
        />
      </a>
    </aside>
  );
};

export default SocialSideBar;
