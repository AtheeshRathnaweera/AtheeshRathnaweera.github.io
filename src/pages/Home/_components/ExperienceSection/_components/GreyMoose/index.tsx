import { getDuration } from "@/utils/common";
import { DivContainer } from "@/components";

const GreyMoose = () => {
  return (
    <DivContainer className="text-gray-600 dark:text-gray-400 w-full">
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
          Dec 2024 - Present · {getDuration("2024-12-01")}
        </span>
      </div>
      <div className="mt-4">
        <ul className="text-sm space-y-1 text-gray-600 list-disc list-inside dark:text-gray-400">
          <li>
            Working as a Software Engineer on the Flutter mobile app  <a
            href="https://bricksearch.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="italic hover:underline"
          >
            BrickSearch
          </a>, delivering features across Android and iOS.
          </li>
          <li>Developed responsive and reusable UI components and integrated them with backend APIs.</li>
          <li>Optimized app performance and enhanced user experience on multiple devices and screen sizes.</li>
          <li>Collaborated with the team on feature planning, bug fixes, and app updates, ensuring smooth development cycles.</li>
          <li>Managed testing releases and consistently delivered high-quality work to meet production-level client expectations.</li>
        </ul>
      </div>
    </DivContainer>
  );
};

export default GreyMoose;

// Working as a Software engineer mainly on the Flutter app called BrickSearch.
// Implemented responsive UI components and integrated with backend APIs.
// Optimized app performance and improved user experience on both Android and iOS.
// Collaborated with the team on feature planning, bug fixes, and app updates.
// Managed testing releases and deliver high quality work to meet production level client expectations.
// App website: https://bricksearch.app/