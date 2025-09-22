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
      <div
        className="flex flex-row flex-nowrap min-h-screen w-full overflow-x-hidden"
        // style={{ display: "flex", flex: 1, minHeight: "100vh" }}
      >
        <SocialSideBar />
        <MainContent />
        <EmailSideBar />
      </div>
    </>
  );
};

export default AppLayout;
