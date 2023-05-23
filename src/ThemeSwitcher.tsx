import { ChangeEvent, useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("1");

  const themes = ["1", "2", "3"];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
  };

  return (
    <form className="theme-switcher">
      <fieldset>
        <legend>Theme Switcher</legend>
        <p>theme</p>
        <div className="switcher">
          <div className="switcher__labels">
            {themes.map((th) => (
              <label htmlFor={`theme-${th}`} key={th}>
                {th}
              </label>
            ))}
          </div>
          <div className="switcher__keys">
            {themes.map((th) => (
              <input
                type="radio"
                name="theme-switcher"
                id={`theme-${th}`}
                checked={th === theme}
                value={th}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default ThemeSwitcher;
