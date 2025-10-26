import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin } from "lucide-react";
import Resume from "../files/Karryl_Dumalag_Resume.pdf";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center  min-h-screen">
      <h1 className="text-[80px] sm:text-[90px] font-bold text-gray-900 dark:text-white mb-4">
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

      <p className="text-lg mt-4 text-gray-600 dark:text-gray-300 max-w-2xl  mb-8">
        <p>This website is my playground, a showcase of my coding adventures, from side projects that kept me up way past my bedtime to academic endeavors that challenged my brain in all the right ways.  </p>
        <p>So, grab a cup of your favorite caffeinated beverage (I recommend double espresso for maximum code-fu) and take a look around! You might find something that sparks your curiosity, piques your interest, or even makes you laugh (hopefully not at my expense... ).</p>
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
        href={Resume}
        target="_blank"
        className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white transition"
      >
        My Resume
      </a>
    </section>
  );
}
