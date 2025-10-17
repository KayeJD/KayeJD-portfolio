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

      <div className="w-full flex flex-col items-center py-8">
        <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg bg-neutral-100 dark:bg-neutral-800 transition-all">
          
          {/* Image Section */}
          <div className="relative">
            <a
              className="block h-72 bg-cover bg-center opacity-90 hover:opacity-100 transition"
              style={{ backgroundImage: "url('images/volexmain.jpg')" }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <h2 className="text-4xl font-bold text-white tracking-wide">VOLEX</h2>
              </div>
            </a>
          </div>

          {/* Tag Section */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <span className="px-3 py-1 text-sm border border-gray-400 rounded-full text-gray-700 dark:text-gray-200">Next.js</span>
            <span className="px-3 py-1 text-sm border border-gray-400 rounded-full text-gray-700 dark:text-gray-200">TypeScript</span>
            <span className="px-3 py-1 text-sm border border-gray-400 rounded-full text-gray-700 dark:text-gray-200">TailwindCSS</span>
            <span className="px-3 py-1 text-sm border border-gray-400 rounded-full text-gray-700 dark:text-gray-200">Dwolla</span>
            <span className="px-3 py-1 text-sm border border-gray-400 rounded-full text-gray-700 dark:text-gray-200">Plaid</span>
          </div>

          {/* Description Section */}
          <div className="text-center mt-6 px-6 pb-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              VOLEX is a web application that aims to relieve the tediousness and hassles of monitoring and maintaining one's finances.
            </p>

            <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400 italic">
              In Progress...
            </p>
          </div>
        </div>
      </div>
    
    </main>

  );
}
