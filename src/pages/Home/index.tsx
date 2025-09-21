import { SiteFooter } from "@/components";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  WorkSection,
} from "./_components";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <WorkSection />
      <ContactSection />
      <SiteFooter />
    </>
  );
};

export default Home;
