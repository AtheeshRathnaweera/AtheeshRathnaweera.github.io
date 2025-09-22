import { mePicture } from "@/assets";
import { Section, SectionContent, SectionTitle } from "@/components";

const AboutSection = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionContent>
        <div className="grid grid-cols-1 pb-12 sm:grid-cols-3 sm:pb-12 md:grid-cols-5 lg:grid-cols-4">
          <div className="leading-relaxed order-2 col-span-4 sm:order-2 sm:col-span-4 md:order-1 md:col-span-3 lg:order-1 lg:col-span-3">
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Hello! My name is <span className="font-semibold">Atheesh</span>{" "}
              and I love building things that live on the internet. My interest
              in software development began when I started experimenting with
              small coding projects and quickly realized how exciting it was to
              bring ideas to life through technology.
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Fast-forward to today, I’ve had the opportunity to work on web,
              mobile, and backend projects across different industries. From
              start-ups to larger organizations, I’ve built applications that
              are not only functional but also designed with the user in mind.
              My main focus these days is creating intuitive, human-centered
              digital experiences as a Full-Stack Software Engineer.
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="list-disc pl-6 text-gray-500 dark:text-gray-400 mb-4 space-y-0.5">
              <li>JavaScript (ES6+) &amp; TypeScript</li>
              <li>React, Angular, Next.js</li>
              <li>Node.js, .NET, Spring Boot</li>
              <li>Flutter, React Native</li>
              <li>Airflow, DBT</li>
            </ul>
          </div>
          <div className="justify-items-center px-4 pb-7 order-1 col-span-4 sm:order-1 sm:col-span-4 sm:justify-items-center sm:pb-5 sm:pr-1.75 md:order-1 md:col-span-2 lg:order-2 lg:col-span-1">
            <img
              src={mePicture}
              alt="Atheesh Rathnaweera"
              className="w-4/5 sm:w-1/2 md:w-5/6 xl:w-4/5 h-auto rounded-lg object-cover shadow-[0_8px_32px_rgba(0,0,0,0.15)] outline-2 outline-[#9ca3af] outline-offset-4 transition-[box-shadow,border-color] duration-300"
            />
          </div>
        </div>
      </SectionContent>
    </Section>
  );
};

export default AboutSection;
