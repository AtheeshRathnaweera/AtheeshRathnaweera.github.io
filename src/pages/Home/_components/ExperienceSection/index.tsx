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
          <div className="flex-1 pl-4">
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
