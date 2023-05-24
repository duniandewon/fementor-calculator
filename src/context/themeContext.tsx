import { ReactNode, createContext, useMemo, useState } from "react";

export type Theme = "light" | "dark" | "purple";

export interface IThemeContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

const ThemeContextProvide = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvide;
