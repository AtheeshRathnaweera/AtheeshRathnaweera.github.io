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
        <ul className="text-sm space-y-1 text-gray-600 list-disc list-inside dark:text-gray-400">
          <li>
            Engaged as a project-based freelance developer, contributing to 5+ enterprise-level web applications.
          </li>
          <li>
            Worked with JSP and Spring Boot (Thymeleaf), focusing on frontend development as well as backend integration and business logic handling.
          </li>
          <li>
            Integrated frontend components with RESTful services, ensuring performance, reliability, and scalability.
          </li>
          <li>Delivered high-quality solutions within strict timelines, meeting enterprise standards and client expectations.</li>
          <li>Gained exposure to cloud and serverless technologies, including AWS S3 for storage, AWS Lambda for backend processing, and Firebase Authentication for secure user access.</li>
        </ul>
      </div>
    </DivContainer>
  );
};

export default ThreeITeamIntl;
