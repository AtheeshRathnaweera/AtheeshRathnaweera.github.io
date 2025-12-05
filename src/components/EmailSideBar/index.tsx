const EmailSideBar = () => {
  return (
    <aside className="w-15 flex flex-col items-center py-12 overflow-hidden fixed right-0 h-screen z-10 dark:text-white justify-end sm:w-20 lg:w-30 xl:w-40 2xl:w-50 2xl:py-15">
      <span
        className="text-[0.8rem] sm:text-[0.9rem] 2xl:text-[1rem] whitespace-nowrap tracking-[2px] text-gray-600 dark:text-white"
        style={{
          writingMode: "vertical-lr",
          textOrientation: "mixed",
        }}
      >
        rathnaweeraatheesh72@gmail.com
      </span>
    </aside>
  );
};

export default EmailSideBar;
