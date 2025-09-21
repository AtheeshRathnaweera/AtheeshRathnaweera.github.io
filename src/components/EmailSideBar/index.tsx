const EmailSideBar = () => {
  return (
    <aside className="w-20 sm:w-15 bg-[var(--color-bg)] flex flex-col items-center py-12 overflow-hidden fixed right-0 h-screen z-10 text-white justify-end">
      <span
        className="text-[0.9rem] whitespace-nowrap tracking-[2px]"
        style={{
          writingMode: "vertical-lr",
          textOrientation: "mixed",
        }}
      >
        rathnaweeraatheesh71@gmail.com
      </span>
    </aside>
  );
};

export default EmailSideBar;
