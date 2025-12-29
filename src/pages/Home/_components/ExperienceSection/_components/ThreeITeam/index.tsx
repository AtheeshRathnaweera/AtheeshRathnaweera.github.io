import { DivContainer } from "@/components";

const ThreeITeamIntl = () => {
  return (
    <DivContainer className="text-gray-600 dark:text-gray-400 w-full">
      <div className="block">
        <div className="flex flex-col gap-1 md:flex-row md:items-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white order-2 md:order-1">
            Freelance Web Developer
          </h3>
          <a
            href="https://3iteam.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-grey dark:text-white font-semibold hover:underline order-1 md:order-2"
          >
            @ 3iTeam International
          </a>
        </div>
        <span className="block text-sm text-gray-600 dark:text-gray-400 mt-1">
          Mar 2020 - Jul 2022 · 2 yrs 5 mos
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
    </DivContainer>
  );
};

export default ThreeITeamIntl;
