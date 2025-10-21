export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 bg-neutral-50 dark:bg-neutral-950 px-6 text-center"
    >
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
        My Skills
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div>
          <h3 className="font-semibold text-xl mb-2 text-blue-600">
            Languages
          </h3>
          <ul className="space-y-1 text-gray-700 dark:text-gray-300">
            <li>Python</li>
            <li>Java / JavaFX</li>
            <li>JavaScript / TypeScript</li>
            <li>C / C++</li>
            <li>HTML / CSS / Pug</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-2 text-blue-600">
            Tools & Platforms
          </h3>
          <ul className="space-y-1 text-gray-700 dark:text-gray-300">
            <li>Google Cloud</li>
            <li>Git / GitHub</li>
            <li>MySQL / PostgreSQL</li>
            <li>Node.js</li>
            <li>Linux / Windows</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-2 text-blue-600">
            Graphic Design
          </h3>
          <ul className="space-y-1 text-gray-700 dark:text-gray-300">
            <li>UI / UX Design</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Print Design</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-2 text-blue-600">
            Electrical
          </h3>
          <ul className="space-y-1 text-gray-700 dark:text-gray-300">
            <li>Embedded Systems</li>
            <li>Circuit Bending</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
