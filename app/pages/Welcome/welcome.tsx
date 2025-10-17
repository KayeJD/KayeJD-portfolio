import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/app/components/ui/resizable"

export function Welcome() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <Badge variant="default">Badge</Badge>
            <img
              src={logoLight}
              alt="React Router"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="React Router"
              className="hidden w-full dark:block"
            />
          </div>
        </header>

        {/* Centered Button Section */}
        <div className="flex items-center justify-center w-full">
          <Button
            variant="outline"
            size="lg"
            className="w-64 h-16 text-xl font-semibold"
          >
            Button
          </Button>
        </div>

        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>One</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>Two</ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </main>

  );
}
