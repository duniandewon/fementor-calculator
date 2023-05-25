import { ChangeEvent } from "react";

import { Theme } from "../../context/themeContext";

import { Container, Key, Keys, Label, Labels, Swithcer } from "./styled";

import { useTheme } from "../../hooks/useTheme";

const ThemeSwitcher = () => {
  const themes = ["dark", "light", "purple"];

  const { theme, setTheme } = useTheme();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value as Theme);
  };

  return (
    <Container>
      <p>theme</p>
      <Swithcer>
        <Labels>
          {themes.map((th, i) => (
            <Label htmlFor={th} key={th}>
              {i + 1}
            </Label>
          ))}
        </Labels>
        <Keys currenttheme={theme}>
          {themes.map((th) => (
            <Key
              currenttheme={theme}
              key={th}
              type="radio"
              name="theme-switcher"
              id={th}
              checked={th === theme}
              value={th}
              onChange={handleChange}
            />
          ))}
        </Keys>
      </Swithcer>
    </Container>
  );
};

export default ThemeSwitcher;
