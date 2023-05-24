import { useContext } from "react";

import { IThemeContext, ThemeContext } from "../context/themeContext";

export const useTheme = () => useContext(ThemeContext) as IThemeContext;
