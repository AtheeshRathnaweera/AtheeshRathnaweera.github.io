import { SiteFooter } from "@/components";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  WorkSection,
} from "./_components";
import { useEffect } from "react";
import { useAppContext } from "@/contexts";

const SECTION_IDS = ["home", "about", "experience", "work", "contact"];

const Home = () => {
  const { setActiveSection } = useAppContext();

  useEffect(() => {
    const handleObserve = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserve, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
