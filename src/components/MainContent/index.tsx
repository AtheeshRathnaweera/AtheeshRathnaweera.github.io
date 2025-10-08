import { Outlet } from "react-router-dom";

const MainContent = () => (
  <main className="flex-1 min-h-screen w-full px-15 sm:px-20 lg:px-30 xl:px-40 2xl:px-50 dark:bg-[var(--color-dark-bg)]">
    <Outlet />
  </main>
);

export default MainContent;
