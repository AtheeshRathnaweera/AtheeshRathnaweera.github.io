import {
  SocialSideBar,
  TopNavBar,
  EmailSideBar,
  MainContent,
} from "@/components";

const AppLayout = () => {
  return (
    <>
      <TopNavBar />
      <div style={{ display: "flex", flex: 1, minHeight: "100vh" }}>
        <SocialSideBar />
        <MainContent />
        <EmailSideBar />
      </div>
    </>
  );
};

export default AppLayout;
