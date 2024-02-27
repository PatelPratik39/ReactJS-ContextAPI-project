import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { setSelected, theme } = useContext(ThemeContext);
  const next = theme.name === "light" ? "dark" : "light";
  return <button onClick={() => setSelected(next)}>Toggle the theme</button>;
};
export default ThemeToggle;
