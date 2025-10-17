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
      <div className="mb-8">
        <Button
        variant="outline"
        size="lg"
        className="w-64 h-16 text-xl font-semibold"
        >
          Button
        </Button>
      </div>
      
    </main>

  );
}
