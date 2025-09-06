const Mobios = ()=>{
  return (
    <div className="text-medium text-gray-500 dark:text-gray-400 rounded-lg w-full">
      <div className="block">
        <div className="flex items-center gap-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Software Engineering Trainee
          </h3>
          <a
            href="https://www.mobios.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-cyan-700 dark:text-cyan-300 font-semibold hover:underline"
          >
            @ mobiOs Pvt Ltd
          </a>
        </div>
        <span className="block text-sm text-gray-500 dark:text-gray-400 mt-1">
          Sep 2019 - Apr 2020 · 8 mos
        </span>
      </div>
      <div className="mt-3">
        <ul className="text-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
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
}

export default Mobios;