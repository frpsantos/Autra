// src/components/ThemeToggle.tsx
import React, { useEffect, useState } from "react";

function getInitial(): "light" | "dark" {
  if (typeof localStorage !== "undefined" && localStorage.theme) {
    return localStorage.theme as "light" | "dark";
  }
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitial());

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      className="fixed right-4 top-4 z-50 rounded-xl border border-zinc-300 bg-white/90 px-3 py-2 text-sm font-medium text-zinc-900 shadow hover:bg-white dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-white"
      title={theme === "dark" ? "Mudar para claro" : "Mudar para escuro"}
    >
      {theme === "dark" ? "☀️ Claro" : "🌙 Escuro"}
    </button>
  );
}
