import { useState } from "react";
import { Section, SectionContent, SectionTitle } from "@/components";
import { GreyMoose, Mobios, Novigi, ThreeITeam } from "./_components";

const TABS = [
  { id: "1", label: "Novigi Pty Ltd" },
  { id: "2", label: "Grey Moose Technologies Inc." },
  { id: "3", label: "3iTeam International" },
  { id: "4", label: "mobiOs Private Limited" },
];

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <Section id="experience" className="mb-40 items-start">
      <SectionTitle>Where I've Worked</SectionTitle>
      <SectionContent>
        <div className="md:flex">
          <ul
            // className="flex flex-row md:flex-col text-sm font-medium text-gray-700 dark:text-gray-400 sm:me-0 md:me-4 lg:me-6 mb-4 md:mb-0"
            className="flex flex-row md:flex-col text-sm font-medium text-gray-700 dark:text-gray-400 sm:me-0 md:me-4 lg:me-6 mb-4 md:mb-0 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400"
          >
            {TABS.map((tab) => (
              <li key={tab.id} className="flex-1 md:flex-none">
                <button
                  type="button"
                  className={`flex md:inline-flex items-center justify-center md:justify-start px-4 py-3 w-full h-20 md:h-auto cursor-pointer border-b-3 md:border-b-0 md:border-l-3 whitespace-normal ${
                    activeTab === tab.id
                      ? "border-black dark:border-white  dark:text-white bg-transparent"
                      : "border-gray-200 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  aria-current={activeTab === tab.id ? "page" : undefined}
                  role="tab"
                  id={`${tab.id}-tab`}
                >
                  <span className="line-clamp-2 md:line-clamp-0 md:pl-2">
                    {tab.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <div className="flex-1 pt-5 sm:pl-0 md:pt-0 md:pl-6 lg:pl-12 xl:pl-24">
            {activeTab === "1" && <Novigi />}
            {activeTab === "2" && <GreyMoose />}
            {activeTab === "3" && <ThreeITeam />}
            {activeTab === "4" && <Mobios />}
          </div>
        </div>
      </SectionContent>
    </Section>
  );
};

export default ExperienceSection;
