import meImage from "@/assets/me_001.jpeg";
import { Section, SectionContent, SectionTitle } from "@/components";

const AboutSection = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionContent>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="col-span-2">
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
            <ul className="list-disc pl-6 text-gray-500 dark:text-gray-400 mb-4">
              <li>JavaScript (ES6+) &amp; TypeScript</li>
              <li>React, Angular, Next.js</li>
              <li>Node.js, .NET, Spring Boot</li>
              <li>Flutter, React Native</li>
              <li>Airflow, DBT</li>
            </ul>
          </div>
          <div className="img-holder" style={{ justifyItems: "end" }}>
            <img
              src={meImage}
              alt="Atheesh Rathnaweera"
              style={{
                width: "75%",
                height: "auto",
                borderRadius: "0.5rem",
                objectFit: "cover",
                boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                outline: "2px solid #9ca3af",
                outlineOffset: "4px",
                transition: "box-shadow 0.3s, border-color 0.3s",
              }}
            />
          </div>
        </div>
      </SectionContent>
    </Section>
  );
};

export default AboutSection;
