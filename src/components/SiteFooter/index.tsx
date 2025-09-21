const SiteFooter = () => (
  <footer className="w-full py-9 text-center text-gray-500 dark:text-gray-400">
    &copy; {new Date().getFullYear()} Atheesh Rathnaweera. All rights reserved.
    <br />
    <span className="text-sm">
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
