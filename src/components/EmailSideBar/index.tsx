const EmailSideBar = () => {
  return (
    <aside className="w-15 bg-[var(--color-bg)] flex flex-col items-center py-12 overflow-hidden fixed right-0 h-screen z-10 text-white justify-end sm:w-20 lg:w-30 xl:w-40">
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
