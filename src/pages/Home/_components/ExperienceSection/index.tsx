import { useState } from "react";
import { Section, SectionContent, SectionTitle } from "@/components";
import { Mobios } from "./_components";

const TABS = [
  { id: "1", label: "Novigi Pty Ltd" },
  { id: "2", label: "Grey Moose Technologies Inc." },
  { id: "3", label: "3iTeam International" },
  { id: "4", label: "mobiOs Private Limited" },
];

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <Section id="experience" style={{ alignItems: "start" }}>
      <SectionTitle>Where I've Worked</SectionTitle>
      <SectionContent>
        <div className="md:flex">
          <ul className="flex-column text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
            {TABS.map((tab) => (
              <li key={tab.id}>
                <button
                  type="button"
                  className={`inline-flex items-center px-4 py-3 w-full cursor-pointer border-l-2 ${
                    activeTab === tab.id
                      ? "border-white dark:border-white text-white dark:text-white bg-transparent"
                      : "border-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  aria-current={activeTab === tab.id ? "page" : undefined}
                  role="tab"
                  id={`${tab.id}-tab`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex-1">
            {activeTab === "1" && (
              <div className="text-medium text-gray-500 dark:text-gray-400 rounded-lg w-full">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  First Tab
                </h3>
                <p className="mb-2">
                  This is some placeholder content for the Profile tab's
                  associated content.
                </p>
              </div>
            )}
            {activeTab === "2" && (
              <div className="text-medium text-gray-500 dark:text-gray-400 rounded-lg w-full">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Second Tab
                </h3>
                <p className="mb-2">
                  This is some placeholder content for the Dashboard tab's
                  associated content.
                </p>
              </div>
            )}
            {activeTab === "3" && (
              <div className="text-medium text-gray-500 dark:text-gray-400 rounded-lg w-full">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Settings Tab
                </h3>
                <p className="mb-2">
                  This is some placeholder content for the Settings tab's
                  associated content.
                </p>
              </div>
            )}
            {activeTab === "4" && <Mobios />}
          </div>
        </div>
      </SectionContent>
    </Section>
  );
};

export default ExperienceSection;
