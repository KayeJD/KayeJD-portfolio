import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-background text-foreground hover:bg-muted transition-all"
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      <span className="text-sm">{darkMode ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
};
