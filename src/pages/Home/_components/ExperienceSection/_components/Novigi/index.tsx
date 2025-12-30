import { getDuration } from "@/utils/common";
import { DivContainer } from "@/components";

const Novigi = () => {
  return (
    <DivContainer className="text-gray-600 dark:text-gray-400 w-full">
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
          <ul className="text-sm space-y-1 text-gray-600 list-disc list-inside dark:text-gray-400">
            <li>
              Contributed as a Data Engineer to an ELT project using DBT, gaining hands-on experience with Azure Databricks, SQL, 
              and Python to build scalable data pipelines.
            </li>
            <li>
              Worked on an integration project based on the Spring Boot framework, implementing multiple change requests 
              across different timelines, taking ownership of releases and deliverables, and ensuring high-quality production standards.
            </li>
            <li>
              Led the frontend development for an AI-based smart platform for a major superannuation corporation, taking full ownership 
              of the Vite + React frontend, delivering responsive and maintainable UI components.
            </li>
            <li>
              Partnered with cross-functional teams to develop comprehensive, end-to-end solutions, connecting frontend, backend, 
              and data engineering workflows.
            </li>
            <li>
              Provided guidance and mentoring, promoting best practices in code quality, system architecture, and deployment processes.
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
          <ul className="text-sm space-y-1 text-gray-600 list-disc list-inside dark:text-gray-400">
            <li>
              Worked across multiple projects spanning different tech stacks, gaining exposure to diverse development environments.
            </li>
            <li>
              Contributed to full-stack development, handling both frontend (React, Angular) and backend (Express.js) components to deliver end-to-end, production-ready features.
            </li>
            <li>
              Built task automation scripts using Python, hosted on AWS cloud, gaining hands-on experience with AWS Lambda, S3, and other cloud services.
            </li>
            <li>
              Contributed to a data engineering project as a SQL developer, collaborating closely with Business Analysts to prepare SQL scripts that supported data-driven decision making.
            </li>
            <li>
              Collaborated with cross-functional teams to deliver high-quality, production-ready solutions under tight timelines.
            </li>
            <li>
              Gained experience in end-to-end system development, including frontend, backend, automation, and data pipelines.
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
          <ul className="text-sm space-y-1 text-gray-600 list-disc list-inside dark:text-gray-400">
            <li>
              Worked as a Full-Stack Developer on the Player Metrics Calculation System for a major Australian Football club, contributing to both frontend and backend functionality.
            </li>
            <li>
              Developed features for the Ionic mobile application and integrated them with the Express.js backend, ensuring smooth data flow and system reliability.
            </li>
            <li>
              Collaborated in an Agile environment, delivering high-quality releases on schedule and adhering to best practices.
            </li>
          </ul>
        </div>
      </div>
    </DivContainer>
  );
};

export default Novigi;

// Senior SE
// Data engineer role played and contributed to ELT project which used DBT. Also gained experience in Azure Databricks and SQL and python.
// Worked on the integration project which is based on Spingboot framework. IMplemented multiple changes requests cross different timeleine and took the ownsership including releases and deliverables.
// Worked as the FE developer in the AI based smart platform for a major superannuation corporation. Took the ownsership of the FE which is vite react app.
