import { Container, Key, Keys, Label, Labels, Swithcer } from "./styled";

const ThemeSwitcher = () => {
  const themes = ["1", "2", "3"];

  return (
    <Container>
      <p>theme</p>
      <Swithcer>
        <Labels>
          {themes.map((th) => (
            <Label htmlFor={`theme-${th}`} key={th}>
              {th}
            </Label>
          ))}
        </Labels>
        <Keys>
          {themes.map((th) => (
            <Key
              key={th}
              type="radio"
              name="theme-switcher"
              id={`theme-${th}`}
              // checked={th === theme}
              value={th}
              // onChange={handleChange}
            />
          ))}
        </Keys>
      </Swithcer>
    </Container>
  );
};

export default ThemeSwitcher;
