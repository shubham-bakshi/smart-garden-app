
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useColorScheme } from "react-native";
import {
  themes,
  type AppTheme,
  type ThemeMode,
} from "../constants/theme";

type ThemePreference = ThemeMode | "system";

type ThemeContextValue = {
  theme: AppTheme;
  mode: ThemeMode;
  preference: ThemePreference;
  setPreference: (mode: ThemePreference) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined
);

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const systemScheme = useColorScheme();
  const [preference, setPreference] =
    useState<ThemePreference>("system");

  const mode: ThemeMode =
    preference === "system"
      ? systemScheme === "dark"
        ? "dark"
        : "light"
      : preference;

  const value = useMemo(
    () => ({
      theme: themes[mode] as AppTheme,
      mode,
      preference,
      setPreference,
      toggleTheme: () =>
        setPreference(mode === "dark" ? "light" : "dark"),
    }),
    [mode, preference]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useAppTheme must be used inside ThemeProvider"
    );
  }

  return context;
}
