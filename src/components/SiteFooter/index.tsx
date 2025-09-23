const SiteFooter = () => (
  <footer className="w-full py-9 text-center text-gray-600 dark:text-gray-400 text-sm">
    <span>
      &copy; {new Date().getFullYear()} Atheesh Rathnaweera. All rights
      reserved.
    </span>
    <br />
    <span className="text-xs">
      Design inspired by{" "}
      <a
        href="https://v4.brittanychiang.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Brittany Chiang
      </a>
    </span>
  </footer>
);

export default SiteFooter;
