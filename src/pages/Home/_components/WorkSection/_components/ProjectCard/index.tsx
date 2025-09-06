interface SectionContentProps {
  title: string;
  description: string;
  topics?: string[];
}

const ProjectCard = ({ title, description, topics }: SectionContentProps) => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="text-sm font-normal text-gray-700 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
      {topics && topics.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-y-2">
          {topics.map((topic) => (
            <span
              key={topic}
              className=" text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full  dark:text-gray-400 border border-gray-500"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
