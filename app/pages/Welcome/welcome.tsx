import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/app/components/ui/resizable"
import ProjectCard from "@/app/components/ProjectCard";
import volexImg from "@/app/images/volexmain.jpg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="mb-8">
        {/* <Button
        variant="outline"
        size="lg"
        className="w-64 h-16 text-xl font-semibold"
        >
          Button
        </Button> */}
      </div>

      <ProjectCard
        title="VOLEX"
        image={volexImg}
        description="VOLEX is a web application that aims to relieve the tediousness and hassles of monitoring and maintaining one's finances."
        tags={["Next.js", "TypeScript", "TailwindCSS", "Dwolla", "Plaid"]}
        status="In Progress..."
      />
    
    </main>

  );
}
