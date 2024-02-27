import React, { createContext, useEffect, useState } from "react";
import { light, dark } from "./themes";

export const ThemeContext = createContext();
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(light);
  const [selected, setSelected] = useState("light");
  useEffect(() => {
    setTheme(selected === "light" ? light : dark);
  }, [selected]);
  return (
    <ThemeContext.Provider value={{ theme, setSelected }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
