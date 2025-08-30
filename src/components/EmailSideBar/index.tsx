const EmailSideBar = () => {
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
        float: "right",
        right: 0,
        height: "100vh",
        zIndex: 10,
        color: "#fff",
        justifyContent: "flex-end",
      }}
    >
      <span
        style={{
          writingMode: "vertical-lr",
          textOrientation: "mixed",
          fontSize: "0.9rem",
          letterSpacing: "2px",
          whiteSpace: "nowrap",
        }}
      >
        rathnaweeraatheesh71@gmail.com
      </span>
    </aside>
  );
};

export default EmailSideBar;
