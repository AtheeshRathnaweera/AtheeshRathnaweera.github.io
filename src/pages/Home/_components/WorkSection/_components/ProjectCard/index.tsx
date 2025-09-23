interface SectionContentProps {
  title: string;
  description: string;
  link?: string;
  topics?: string[];
}

const ProjectCard = ({
  title,
  description,
  link,
  topics,
}: SectionContentProps) => {
  const CardContent = (
    <>
      <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-white">
        {title}
      </h5>
      <p className="text-sm font-normal text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
      <div className="flex-1" />
      {topics && topics.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-y-2">
          {topics.map((topic) => (
            <span
              key={topic}
              className="text-gray-200 bg-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full border border-gray-600 dark:bg-[#232323]"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full h-full p-3 sm:p-6 border border-gray-200 rounded-lg shadow-sm flex-col transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-white cursor-pointer dark:bg-[#1a1a1a] dark:border-gray-700"
        style={{ textDecoration: "none" }}
      >
        {CardContent}
      </a>
    );
  }

  return (
    <div className="flex w-full h-full p-3 sm:p-6 border border-gray-200 rounded-lg shadow-sm flex-col dark:bg-[#1a1a1a] dark:border-gray-700 border-red">
      {CardContent}
    </div>
  );
};

export default ProjectCard;
