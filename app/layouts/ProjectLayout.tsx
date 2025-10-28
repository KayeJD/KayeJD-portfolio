import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

interface ProjectStep {
  title: string;
  description: string;
  image?: string;
}

interface ProjectSection {
  heading?: string;
  content: React.ReactNode;
}

interface ProjectLayoutProps {
  title: string;
  subtitle?: string;
  overview: string;
  collaborator?: {
    name: string;
    link: string;
  };
  highlights?: {
    languages?: string;
    tools?: string;
    dataset?: string;
  };
  steps?: ProjectStep[];
  summary?: string | string[]; 
  repoLink?: string;
  mainImage?: string;
  sections?: ProjectSection[];
}


export const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  title,
  subtitle,
  overview,
  collaborator,
  highlights,
  steps,
  summary,
  repoLink,
  mainImage,
  sections,
}) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 bg-neutral-50 dark:bg-neutral-900 min-h-screen">
      
      <Header />

      <main className="pt-32 w-full max-w-5xl mx-auto space-y-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Main Image */}
        {mainImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src={mainImage}
              alt={title}
              className="rounded-xl shadow-lg max-h-[450px] w-full object-cover"
            />
          </motion.div>
        )}

        {/* Overview Section */}
        <section className="space-y-4 text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Overview
          </h2>
          <p className="leading-relaxed">{overview}</p>

          {collaborator && (
            <p>
              Collaborator:{" "}
              <a
                href={collaborator.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {collaborator.name}
              </a>
            </p>
          )}
        </section>

        {/* Highlights */}
        {highlights && (
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {highlights.languages && (
              <div className="bg-white dark:bg-neutral-800 p-5 rounded-xl shadow-md text-center">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Languages
                </h3>
                <p>{highlights.languages}</p>
              </div>
            )}
            {highlights.tools && (
              <div className="bg-white dark:bg-neutral-800 p-5 rounded-xl shadow-md text-center">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Tools & Frameworks
                </h3>
                <p>{highlights.tools}</p>
              </div>
            )}
            {highlights.dataset && (
              <div className="bg-white dark:bg-neutral-800 p-5 rounded-xl shadow-md text-center">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Dataset
                </h3>
                <p>{highlights.dataset}</p>
              </div>
            )}
          </section>
        )}

        {/* Steps */}
        {steps && steps.length > 0 && (
          <section className="space-y-10 mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Implementation Steps
            </h2>

            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row items-center gap-6 bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-md"
              >
                {step.image && (
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full md:w-1/3 rounded-lg shadow"
                  />
                )}

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </section>
        )}

        {sections && sections.length > 0 && (
          <section className="mt-10 space-y-10">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md"
              >
                {section.heading && (
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                    {section.heading}
                  </h3>
                )}
                <div className="prose dark:prose-invert max-w-none">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </section>
        )}

        {/* Summary */}
{summary && (
  <section className="bg-blue-50 dark:bg-blue-950 p-6 rounded-xl shadow-md mt-12">
    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
      Summary
    </h2>

    {Array.isArray(summary) ? (
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
        {summary.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {summary}
      </p>
    )}
  </section>
)}


        {/* Repo Link */}
        {repoLink && (
          <div className="max-w-4xl w-full mx-auto">
            <div className="flex justify-end mt-10">
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2
                          border border-gray-900 dark:border-gray-100
                          text-gray-900 dark:text-gray-100
                          px-6 py-3 rounded-lg
                          hover:bg-gray-900 hover:text-white
                          dark:hover:bg-gray-100 dark:hover:text-gray-900
                          transition-colors duration-200"
              >
                <Github size={20} />
                View Source on GitHub
              </a>
            </div>
          </div>
        )}

        <Footer/>
      </main>
    </div>
  );
};
