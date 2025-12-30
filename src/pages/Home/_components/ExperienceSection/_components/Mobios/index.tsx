import { DivContainer } from "@/components";

const Mobios = () => {
  return (
    <DivContainer className="text-gray-600 dark:text-gray-400 w-full">
      <div className="block">
        <div className="flex flex-col gap-1 md:flex-row md:items-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white order-2 md:order-1">
            Software Engineering Trainee
          </h3>
          <a
            href="https://www.mobios.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-grey dark:text-white font-semibold hover:underline order-1 md:order-2"
          >
            @ mobiOs Pvt Ltd
          </a>
        </div>
        <span className="block text-sm text-gray-600 dark:text-gray-400 mt-1">
          Sep 2019 - Apr 2020 · 8 mos
        </span>
      </div>
      <div className="mt-4">
        <ul className="text-sm space-y-1 text-gray-600 list-disc list-inside dark:text-gray-400">
          <li>
            Contributed to an Ionic mobile application designed to calculate land area by marking boundary points directly within the app.
          </li>
          <li>
            Worked on frontend bug fixes for a large-scale enterprise product built with JSP (Java EE), using HTML, CSS, JavaScript.
          </li>
          <li>
            Played a major role in a Proof of Concept (POC) project focused on optimizing needle issuance in a garment factory production line, reducing manual paperwork and human intervention.
          </li>
          <li>Gained hands-on experience in Java EE web development, with a strong focus on JSP-based applications and enterprise workflows.</li>
        </ul>
      </div>
    </DivContainer>
  );
};

export default Mobios;
