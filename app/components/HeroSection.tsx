import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
      <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
        Karryl Dumalag
      </h1>

      <TypeAnimation
        sequence={[
          "Software Engineer 💻",
          1500,
          "Full Stack Developer ⚙️",
          1500,
          "Embedded Systems Enthusiast 🔧",
          1500,
          "Problem Solver 🧩",
          1500,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-2xl mb-4 sm:text-3xl font-medium text-blue-600 dark:text-blue-400"
      />

      <p className="text-lg mt-4 text-gray-600 dark:text-gray-300 max-w-2xl text-center mb-8">
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
