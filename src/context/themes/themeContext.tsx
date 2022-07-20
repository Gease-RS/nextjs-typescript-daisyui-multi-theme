import React, { createContext, useMemo, useState } from "react";
import useCustomEffect from "../../hooks/useCustomEffect";

export interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "default",
  setTheme: () => {},
});
 
export const ThemeContextProvider = ({
  value = "default",
  children,
}: {
  value?: string;
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState(value);

  useCustomEffect(() => {
    const storeTheme = localStorage.getItem("theme");
    applyTheme(storeTheme || "default");
  }, []);

  const applyTheme = (theme: string = "default") => {
    let newTheme = theme;
    const html = document.getElementsByTagName("html")[0];
    localStorage.setItem("theme", theme);
    (html as any).setAttribute("data-theme", newTheme);
  };


  const handleThemeChange = (theme: string) => {
    setTheme(theme);
    applyTheme(theme);
  };

  const val = useMemo(
    () => ({
      theme,
      setTheme: handleThemeChange,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={val}>{children}</ThemeContext.Provider>;
};