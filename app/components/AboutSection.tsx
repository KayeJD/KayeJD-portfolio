import { Github, Linkedin } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-24 bg-white dark:bg-neutral-900 px-6"
    >
      <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        About Me
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl text-center mb-8">
        This website is my playground — a showcase of my coding adventures, from
        side projects that kept me up late to academic challenges that pushed my
        limits. Grab a cup of coffee and take a look around!
      </p>

      <div className="flex space-x-6 mb-6">
        <a
          href="https://github.com/KayeJD"
          target="_blank"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
        >
          <Github size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/karryl-dumalag-766b2923b/"
          target="_blank"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
        >
          <Linkedin size={32} />
        </a>
      </div>

      <a
        href="/files/Karryl_Dumalag_Resume.pdf"
        target="_blank"
        className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white transition"
      >
        My Resume
      </a>
    </section>
  );
}
