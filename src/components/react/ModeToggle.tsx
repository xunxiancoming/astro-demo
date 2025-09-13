import { Moon, Sun } from "lucide-react";
import * as React from "react";

type TTheme = "light" | "dark";

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<TTheme>(
    (localStorage.getItem("theme") as TTheme) || "light"
  );

  const toggleTheme = (theme: TTheme) => {
    setThemeState(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.classList[theme === "dark" ? "add" : "remove"](
      "dark"
    );
  };

  return (
    <div className="mx-4">
      {theme === "dark" ? (
        <Sun onClick={() => toggleTheme("light")} className="cursor-pointer" />
      ) : (
        <Moon onClick={() => toggleTheme("dark")} className="cursor-pointer" />
      )}
    </div>
  );
}
