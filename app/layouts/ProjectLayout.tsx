import React from "react";

interface ProjectStep {
  description: string;
  image?: string;
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
  summary?: string;
  repoLink?: string;
  mainImage?: string;
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
}) => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen">
      {/* Header */}
      <header className="py-6 shadow-sm bg-white">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a
            href="/"
            className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition"
          >
            KD<span className="text-blue-600">.</span>
          </a>
          <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
            <a href="/#projects" className="hover:text-blue-600">
              Projects
            </a>
            <a href="/#about" className="hover:text-blue-600">
              About
            </a>
            <a href="/#contact" className="hover:text-blue-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-16 bg-gradient-to-b from-white to-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Portfolio</h2>
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">{title}</h1>
        {subtitle && (
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </section>

      {/* Main Image */}
      {mainImage && (
        <section className="container mx-auto px-6 py-10">
          <div
            className="rounded-2xl overflow-hidden shadow-lg"
            style={{
              backgroundImage: `url(${mainImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px",
            }}
          ></div>
        </section>
      )}

      {/* Content */}
      <section className="container mx-auto px-6 py-8 max-w-4xl leading-relaxed">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
        <p className="mb-6">{overview}</p>

        {collaborator && (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Collaborator:
            </h3>
            <p className="mb-6">
              <a
                href={collaborator.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {collaborator.name}
              </a>
            </p>
          </>
        )}

        {highlights && (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Project Highlights
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              {highlights.languages && (
                <li>
                  <strong>Languages:</strong> {highlights.languages}
                </li>
              )}
              {highlights.tools && (
                <li>
                  <strong>Tools/Libraries:</strong> {highlights.tools}
                </li>
              )}
              {highlights.dataset && (
                <li>
                  <strong>Dataset:</strong> {highlights.dataset}
                </li>
              )}
            </ul>
          </>
        )}

        {steps && steps.length > 0 && (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Step-by-Step Overview
            </h3>
            <ol className="list-decimal list-inside space-y-6">
              {steps.map((step, idx) => (
                <li key={idx}>
                  <p>{step.description}</p>
                  {step.image && (
                    <img
                      src={step.image}
                      alt=""
                      className="rounded-xl my-4 shadow"
                    />
                  )}
                </li>
              ))}
            </ol>
          </>
        )}

        {summary && (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mt-10 mb-3">
              Summary
            </h3>
            <p className="mb-8">{summary}</p>
          </>
        )}

        {repoLink && (
          <div className="mt-10 text-center">
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            >
              View on GitHub
            </a>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="py-8 mt-16 bg-gray-100 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Karryl Dumalag. All rights reserved.</p>
      </footer>
    </div>
  );
};
