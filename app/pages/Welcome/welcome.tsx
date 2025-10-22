import { HeroSection } from "@/app/components/HeroSection";
import { SkillsSection } from "~/components/SkillsSection";
import ProjectCard from "@/app/components/ProjectCard";
import volexImg from "@/app/images/volexmain.jpg";
import { effortloggerMain } from "~/images/effortlogger";
import { creditCardMain } from "~/images/credit-card-ml";
import { SpotifyMain } from "~/images/spotify-unlimited";
import { MicroMain } from "~/images/microprocessor";
import { HVACMain } from "~/images/hvac";

export function Welcome() {
  return (
    <main className="flex items-center justify-center min-h-screen mx-16">
      <div className="mb-8 flex flex-col items-center">
        <HeroSection />
        <SkillsSection />

        <div className="mt-12 mb-8">
          <ProjectCard
            title="VOLEX"
            image={volexImg}
            description="VOLEX is a web application that aims to relieve the tediousness and hassles of monitoring and maintaining one's finances."
            tags={["Next.js", "TypeScript", "TailwindCSS", "Dwolla", "Plaid"]}
            status="In Progress..."
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
      </div>
    
    </main>

  );
}
