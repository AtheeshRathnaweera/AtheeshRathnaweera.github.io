import { Section, SectionContent, SectionTitle } from "@/components";

const ContactSection = () => {
  return (
    <Section id="contact">
      <SectionTitle className="text-center">Get In Touch</SectionTitle>
      <SectionContent className="flex flex-col items-center leading-relaxed">
        <div className="block sm:w-3/4 md:w-1/2 text-gray-600 dark:text-gray-400 text-center">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </div>
        <button
          type="button"
          className="text-gray-900 mt-7 cursor-pointer hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          onClick={() => {
            window.open(
              "mailto:rathnaweeraatheesh72@gmail.com",
              "_blank",
              "noopener,noreferrer"
            );
          }}
        >
          Say Hello
        </button>
      </SectionContent>
    </Section>
  );
};

export default ContactSection;
