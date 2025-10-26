import { motion } from "framer-motion";
import { HeroSection } from "@/app/components/HeroSection";
import { SkillsSection } from "~/components/SkillsSection";
import ProjectCard from "@/app/components/ProjectCard";
import { Header } from "@/app/components/Header"; 
import { TimelineSection } from "@/app/components/TimelineSection";

import volexImg from "@/app/images/volexmain.jpg";
import { effortloggerMain } from "~/images/effortlogger";
import { creditCardMain } from "~/images/credit-card-ml";
import { SpotifyMain } from "~/images/spotify-unlimited";
import { MicroMain } from "~/images/microprocessor";
import { HVACMain } from "~/images/hvac";

export function Welcome() {
  const experienceData = [
    {
    label: "Software Engineer Intern",
    date: "July 2025 - Present",
    title: "Irenix Empowerment Foundation",
    description:
      "● Engineered backend infrastructure and testing environments for a HIPAA-compliant EHR system in Google Cloud, increasing uptime by 25% and supporting scalable data exchange across microservices. \n ● Refactored app data handling logic, cutting client-side latency by 30% and improving overall app performance.",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center px-6 py-16 bg-neutral-50 dark:bg-neutral-900 min-h-screen">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <HeroSection />
      </motion.div>

      {/* <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SkillsSection />
      </motion.div> */}
      

      <div className="mt-12 mb-8">
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

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          My Experience
        </h1>

        <TimelineSection items={experienceData} />

      
        {/* Footer */}
        <footer className="py-8 mt-16 bg-gray-100 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Karryl Dumalag. All rights reserved.</p>
        </footer>
      </div>
    </main>

  );
}
