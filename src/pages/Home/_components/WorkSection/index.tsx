import { Section, SectionTitle } from "@/components";
import { ProjectCard } from "./_components";

const WorkSection = () => {
  return (
    <Section id="work">
      <SectionTitle>Some Things I've Built</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="Unlimited Lyrics"
          description="A Laravel-powered web application for browsing, searching, and viewing a curated collection of song lyrics. Users can easily discover lyrics by song name and explore a growing database of music content."
          topics={["Laravel", "Bootstrap", "PHP", "Heroku"]}
        />
        <ProjectCard
          title="Master Calculations for Kids"
          description="A fun and educational Android app designed to help children master basic calculations, including addition, subtraction, multiplication, and division. Features a gamified experience with multiple levels and increasing difficulty, encouraging kids to learn through play and progress tracking."
          topics={["Android", "Android Studio", "Firebase", "Gamification"]}
        />
        <ProjectCard
          title="NextJs Handson Project"
          description="A hands-on project showcasing my learning journey with Next.js. Explore various features, components, and patterns as I build and experiment with this powerful framework!"
          topics={["Next.js", "TypeScript", "Tailwind CSS"]}
        />
        <ProjectCard
          title="LibraCore Backend"
          description="This is a hands-on project for learning .NET API development, aimed at creating the backend for a Library Management System. There are two parts of the system. Frontend and Backend. Frontend applications is an Angular application."
          topics={[".NET 8", "ASP.NET Core"]}
        />
        <ProjectCard
          title="Advent of Code Solutions"
          description="This repository contains my personal solutions to the Advent of Code puzzles, organized by year."
          topics={["Python 3"]}
        />
        <ProjectCard
          title="Hands on DBT"
          description="A hands-on repo for me to dive deep into Data Build Tool (DBT) and master data transformations."
          topics={["DBT", "Data Transformation"]}
        />
        <ProjectCard
          title="Message Assistant Android App"
          description="This is an android application that can be used to store messages that will be sent via whatsapp or as normal text messages in the future by app itself."
          topics={["Android", "Android Studio"]}
        />
        <ProjectCard
          title="Pillminder Android App"
          description="An android application to track prescription."
          topics={["Android", "Android Studio"]}
        />
        <ProjectCard
          title="Scripts for Scrape Exchange Rates"
          description="A set of scripts for scrape exchange rates from a public banking website and storing them in a CSV file."
          topics={["Python 3", "Beautifulsoup4", "AWS Lambda"]}
        />
      </div>
    </Section>
  );
};

export default WorkSection;
