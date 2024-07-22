import { createContext, useContext } from "react";
export const ThemeContext = useContext({
  themeMode: "Light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;
export default function useTheme(){
    return useContext(ThemeContext)
}
