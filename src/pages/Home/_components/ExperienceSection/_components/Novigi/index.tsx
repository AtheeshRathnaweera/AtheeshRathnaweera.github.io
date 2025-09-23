import { getDuration } from "@/utils/common";

const Novigi = () => {
  return (
    <div className="text-gray-600 dark:text-gray-400 w-full">
      <a
        href="https://www.novigi.com.au/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl text-grey dark:text-white font-semibold hover:underline"
      >
        @ Novigi Pty Ltd
      </a>
      <div className="mt-4">
        <div className="block">
          <div className="flex items-center gap-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Senior Software Engineer
            </h3>
          </div>
          <span className="block text-sm text-gray-600 dark:text-gray-400 mt-1">
            Jul 2023 - Present · {getDuration("2023-07-01")}
          </span>
        </div>
        <div className="mt-4">
          <ul className="text-md space-y-1 text-gray-600 list-disc list-inside dark:text-gray-400">
            <li>
              Developed and maintained web applications using React and Node.js
            </li>
            <li>
              Collaborated with senior engineers to design and implement new
              features
            </li>
            <li>
              Participated in code reviews and contributed to improving code
              quality
            </li>
            <li>
              Worked with RESTful APIs and integrated third-party services
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6">
        <div className="block">
          <div className="flex items-center gap-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Software Engineer
            </h3>
          </div>
          <span className="block text-sm text-gray-600 dark:text-gray-400 mt-1">
            Sep 2021 - Aug 2023 · 2 yrs
          </span>
        </div>
        <div className="mt-4">
          <ul className="text-md space-y-1 text-gray-600 list-disc list-inside dark:text-gray-400">
            <li>
              Developed and maintained web applications using React and Node.js
            </li>
            <li>
              Collaborated with senior engineers to design and implement new
              features
            </li>
            <li>
              Participated in code reviews and contributed to improving code
              quality
            </li>
            <li>
              Worked with RESTful APIs and integrated third-party services
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6">
        <div className="block">
          <div className="flex items-center gap-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Associate Software Engineer
            </h3>
          </div>
          <span className="block text-sm text-gray-600 dark:text-gray-400 mt-1">
            Mar 2021 - Aug 2021 · 6 mos
          </span>
        </div>
        <div className="mt-4">
          <ul className="text-md space-y-1 text-gray-600 list-disc list-inside dark:text-gray-400">
            <li>
              Developed and maintained web applications using React and Node.js
            </li>
            <li>
              Collaborated with senior engineers to design and implement new
              features
            </li>
            <li>
              Participated in code reviews and contributed to improving code
              quality
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Novigi;
