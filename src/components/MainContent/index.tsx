import { Outlet } from "react-router-dom";

const MainContent = () => (
  <main
    style={{
      flex: 1,
      paddingLeft: "10%",
      paddingRight: "10%",
      minHeight: "100vh",
    }}
  >
    <Outlet />
  </main>
);

export default MainContent;
