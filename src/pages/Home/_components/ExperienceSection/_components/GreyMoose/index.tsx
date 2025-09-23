const GreyMoose = () => {
  return (
    <div className="text-gray-600 dark:text-gray-400 w-full">
      <div className="block">
        <div className="flex flex-col gap-1 md:flex-row md:items-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white order-2 md:order-1">
            Freelance Flutter Developer
          </h3>
          <span className="text-xl text-grey dark:text-white font-semibold order-1 md:order-2">
            @ Grey Moose Technologies Inc.
          </span>
        </div>
        <span className="block text-sm text-gray-600 dark:text-gray-400 mt-1">
          Dec 2024 - Present · 10 mos
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
          <li>Worked with RESTful APIs and integrated third-party services</li>
          <li>Assisted in troubleshooting and debugging application issues</li>
          <li>Gained experience with Agile development methodologies</li>
        </ul>
      </div>
    </div>
  );
};

export default GreyMoose;
