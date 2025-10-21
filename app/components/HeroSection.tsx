import { TypeAnimation } from "react-type-animation";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
      <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
        Hi, I'm Karryl Dumalag
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
        className="text-2xl sm:text-3xl font-medium text-blue-600 dark:text-blue-400"
      />

      <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
        I design and build efficient, scalable, and user-friendly applications — 
        from embedded systems to full-stack web solutions.
      </p>

      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </section>
  );
}
