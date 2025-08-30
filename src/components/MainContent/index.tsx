import { Outlet } from "react-router-dom";

const MainContent = () => (
  <main
    style={{
      flex: 1,
      paddingTop: "75px",
      paddingLeft: "80px",
      paddingRight: "80px",
      minHeight: "100vh",
    }}
  >
    <Outlet />
  </main>
);

export default MainContent;
