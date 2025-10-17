import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { Badge } from "@/app/components/ui/badge";
import ProjectCard from "@/app/components/ProjectCard";
import volexImg from "@/app/images/volexmain.jpg";
import effortLoggerImg from "@/app/images/effortloggermain.jpg";
import creditCardImg from "@/app/images/creditcardmain.jpg";
import spotifyImg from "@/app/images/spotifymain.jpg";
import microImg from "@/app/images/micromain.jpg";
import hvacImg from "@/app/images/hvacmain.jpg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="mb-8 flex flex-col items-center">
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
            image={effortLoggerImg}
            description="A remake and improvement over the original EffortLogger Excel Visual Basic Program, written in Java for flexibility and using a localhost SQL database."
            tags={["Java / JavaFX", "SQL", "Authentication", "Documentation", "Agile / Scrum"]}
            link="/project-effortlogger"
          />

          <ProjectCard
            title="Fraud Detection Machine Learning"
            image={creditCardImg}
            description="Analyzes a Kaggle dataset with 284,807 transactions to detect fraud using machine learning models such as Logistic Regression, Random Forest, and Gradient Boosting."
            tags={["Python", "Machine Learning", "Data Modeling", "Data Analysis"]}
            link="/project-creditcardml"
          />

          <ProjectCard
            title="Spotify Web API"
            image={spotifyImg}
            description="Integrates Spotify’s API into a web app for authentication, top track access, and personalized music recommendations with interactive UI."
            tags={["JavaScript", "Pug / CSS", "API", "Express.js", "OAuth 2.0"]}
            link="/project-spotifyapi"
          />

          <ProjectCard
            title="Microprocessor"
            image={microImg}
            description="Engineered the digital logic for a brainless microprocessor programmable through ROM value manipulation."
            tags={["Verilog", "Digital Logic"]}
            link="/project-microprocessor"
          />

          <ProjectCard
            title="HVAC Design"
            image={hvacImg}
            description="Designed a controller to regulate temperature as part of a thermostat system, ensuring safe operation of HVAC equipment."
            tags={[
              "Engineering Design",
              "Circuit Design",
              "Digital Signal Processing",
              "Project Management",
            ]}
            link="/project-hvac"
          />
        </div>
      </div>
    
    </main>

  );
}
