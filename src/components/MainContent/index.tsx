import { Outlet } from "react-router-dom";

const MainContent = () => (
  <main className="pl-20 pr-20 sm:pl-15 sm:pr-15 flex-1 min-h-screen">
    <Outlet />
  </main>
);

export default MainContent;
