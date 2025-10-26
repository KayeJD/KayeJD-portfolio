import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function Header() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      if (localStorage.theme === "dark") return true;
      if (localStorage.theme === "light") return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);

  return (
    <header className="py-6 shadow-sm bg-white dark:bg-gray-900 mb-10 w-full transition-colors duration-300">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="/"
          className="text-2xl font-bold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          KD<span className="text-blue-600 dark:text-blue-400">.</span>
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 text-gray-600 dark:text-gray-300 font-medium">
            <a href="/#projects" className="hover:text-blue-600 dark:hover:text-blue-400">
              Projects
            </a>
          </nav>

          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
