"use client";

import { JSX, useEffect, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import clsx from "clsx";

type Theme = "light" | "dark";

export default function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;

    if (saved === "light" || saved === "dark") {
      applyTheme(saved);
      return;
    }

    // First visit: resolve system preference once
    const initialTheme: Theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    applyTheme(initialTheme);
  }, []);

  function applyTheme(value: Theme) {
    document.documentElement.classList.toggle("dark", value === "dark");

    localStorage.setItem("theme", value);

    document.cookie = `theme=${value}; Path=/; Max-Age=31536000; SameSite=Lax`;

    setTheme(value);
  }

  function toggleTheme() {
    applyTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        "flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors",
        className,
      )}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
    </button>
  );
}
