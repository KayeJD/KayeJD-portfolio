import React from "react";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  tags: string[];
  status?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  tags,
  status = "In Progress...",
}) => {
  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg bg-neutral-100 dark:bg-neutral-800 transition-all">
        
        {/* Image Section */}
        <div className="relative">
          <a
            className="block h-72 bg-cover bg-center opacity-90 hover:opacity-100 hover:scale-[1.02] transition-transform duration-300"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <h2 className="text-4xl font-bold text-white tracking-wide">{title}</h2>
            </div>
          </a>
        </div>

        {/* Tag Section */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm border border-gray-400 rounded-full text-gray-700 dark:text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description Section */}
        <div className="text-center mt-6 px-6 pb-8">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {description}
          </p>

          <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400 italic">
            {status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
