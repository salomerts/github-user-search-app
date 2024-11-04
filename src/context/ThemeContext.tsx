import { createContext, useState, ReactNode, useContext } from "react";

type TTheme = "light" | "dark";
type TThemeContext = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<TThemeContext>({
  theme: "light",
  toggleTheme: () => {},
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<TTheme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("usetheme must be within a ThemeProvider");
  }
  return context;
};
