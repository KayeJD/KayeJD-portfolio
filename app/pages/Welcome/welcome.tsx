// Components
import { HeroSection } from "@/app/components/HeroSection";
import { SkillsSection } from "~/components/SkillsSection";
import ProjectCard from "@/app/components/ProjectCard";
import { Header } from "@/app/components/Header"; 
import { TimelineSection } from "@/app/components/TimelineSection";
import { Footer } from "~/components/Footer";
import { SectionBgText } from "@/app/components/SectionBgText";

// Images
import volexImg from "@/app/images/volexmain.jpg";
import { effortloggerMain } from "~/images/effortlogger";
import { creditCardMain } from "~/images/credit-card-ml";
import { SpotifyMain } from "~/images/spotify-unlimited";
import { MicroMain } from "~/images/microprocessor";
import { HVACMain } from "~/images/hvac";

// ... the other stuff
import { motion } from "framer-motion";
import { useDarkMode } from "~/hooks/Themetoggle";

export function ThemeToggle() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}



export function Welcome() {
  const experienceData = [
    {
      label: "Software Engineer Intern",
      date: "Aug 2025 - Present",
      title: "Irenix Empowerment Foundation",
      description:
        "At Irenix, I helped build and refine the backend for an EHR system designed ground up to securely manage patient data in the Google Cloud environment. I also contributed to integrating ML and AI models that supported predictive analytics and automated health insights. This experience was basically a deep dive into scalable systems, security, and healthcare tech.",
    },
    {
      label: "Software Engineer (Student Contract)",
      date: "Aug 2024 - May 2025",
      title: "General Dynamics Mission Systems",
      description:
        "I worked on secure communications systems for defense environments, developing automated testing tools that supported reliability and performance. It was a great experience blending precision engineering with large-scale collaboration.",
    },
    {
      label: "Software Developer Intern",
      date: "Mar 2024 - Apr 2025",
      title: "28 Gorilla Engineering",
      description:
        "At 28 Gorilla, I joined a small but sharp team working on IoT and a range of embedded projects like battery monitoring systems. I helped design tools to process real-time telemetry and learned a ton about backend systems, teamwork, and building for scale from the ground up.",
    },
    {
      label: "Enterprise Technical Support Specialist",
      date: "Jan 2023 - Jul 2023",
      title: "EAW",
      description:
        "My early tech days were all about problem-solving, helping enterprise clients troubleshoot Microsoft Surface devices and network systems. It’s where I developed a knack for debugging and communicating complex issues clearly.",
    },
  ];



  return (
    <main className="flex flex-col items-center justify-center px-6 py-16 bg-neutral-50 dark:bg-neutral-900 min-h-screen bg-grid">

    

      <Header />

      <section className="relative w-full flex flex-col items-center justify-center py-32">
        <SectionBgText text="ABOUT" />
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <HeroSection />
        </motion.div>
      </section>

      {/* <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SkillsSection />
      </motion.div> */}

      <section className="relative w-full flex flex-col items-center justify-center py-32">
        <SectionBgText text="EXPERIENCE" />
        <div id="experience" className="scroll-mt-32 mt-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            My Experience
          </h1>
          <TimelineSection items={experienceData} />
        </div>
      </section>
    

      <section className="relative w-full flex flex-col items-center justify-center py-32">
        <SectionBgText text="PROJECTS" />
        <div id="projects" className="scroll-mt-32 mt-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Side Projects
          </h1>

          <ProjectCard
            title="VOLEX"
            image={volexImg}
            description="VOLEX is a web application that aims to relieve the tediousness and hassles of monitoring and maintaining one's finances."
            tags={["Next.js", "TypeScript", "TailwindCSS", "Dwolla", "Plaid"]}
            status="In Progress..."
            link="https://github.com/KayeJD/Volex"
          />

          <ProjectCard
            title="EffortLogger 2.0"
            image={effortloggerMain}
            description="A remake and improvement over the original EffortLogger Excel Visual Basic Program, written in Java for flexibility and using a localhost SQL database."
            tags={["Java / JavaFX", "SQL", "Authentication", "Documentation", "Agile / Scrum"]}
            link="effortlogger-project"
          />

          <ProjectCard
            title="Fraud Detection Machine Learning"
            image={creditCardMain}
            description="Analyzes a Kaggle dataset with 284,807 transactions to detect fraud using machine learning models such as Logistic Regression, Random Forest, and Gradient Boosting."
            tags={["Python", "Machine Learning", "Data Modeling", "Data Analysis"]}
            link="credit-card-ml-project"
          />

          <ProjectCard
            title="Spotify Web API"
            image={SpotifyMain}
            description="Integrates Spotify’s API into a web app for authentication, top track access, and personalized music recommendations with interactive UI."
            tags={["JavaScript", "Pug / CSS", "API", "Express.js", "OAuth 2.0"]}
            link="https://github.com/KayeJD/Spotify-Unwrapped-Unlimited"
          />

          <ProjectCard
            title="Microprocessor"
            image={MicroMain}
            description="Engineered the digital logic for a brainless microprocessor programmable through ROM value manipulation."
            tags={["Verilog", "Digital Logic"]}
            link="https://github.com/KayeJD/Microprocessor/blob/main/README.md"
          />

          <ProjectCard
            title="HVAC Design"
            image={HVACMain}
            description="Designed a controller to regulate temperature as part of a thermostat system, ensuring safe operation of HVAC equipment."
            tags={[
              "Engineering Design",
              "Circuit Design",
              "Digital Signal Processing",
              "Project Management",
            ]}
            link="https://github.com/KayeJD/HVAC-System/tree/main"
          />
        </div>
      </section>
        {/* TODO:
        <div id="extras" className="scroll-mt-32 mt-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Extras
          </h1>
        </div> */}
      
      <Footer/>
    
        
    </main>

  );
}
