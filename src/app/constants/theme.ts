
import type { TextStyle, ViewStyle } from "react-native";

export const palette = {
  forest: "#244C3A",
  deepForest: "#1B3828",
  leaf: "#4F7857",
  sage: "#9CC28C",
  softSage: "#E3EDDB",
  paleSage: "#C2D4BF",
  moss: "#4A6E52",
  leafShade: "#406347",
  clay: "#D1B085",

  white: "#FFFFFF",
  cream: "#F7F6F0",
  ink: "#25342C",
  secondaryInk: "#4F5D53",
  muted: "#657168",
  border: "#DEE3D6",

  darkBg: "#151C18",
  darkSurface: "#222D26",
  darkElevated: "#2E4033",
  darkText: "#E8EEE7",
  darkSecondary: "#B0BFB2",
  darkBorder: "#4F5D53",

  soil: "#4F7857",
  lightSensor: "#477DA6",
  temperature: "#BA6E21",
  warningBg: "#FAEDD1",
  infoBg: "#DEEDF5",
  plantHighlight: "#D6E5C7",

  success: "#43845A",
  warning: "#BA6E21",
  critical: "#B94B45",
  offline: "#697580",
} as const;

export const spacing = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 8,
  smPlus: 10,
  md: 12,
  mdPlus: 14,
  lg: 16,
  xl: 20,
  xxl: 24,
  page: 30,
} as const;

export const radius = {
  sm: 6,
  md: 10,
  lg: 12,
  xl: 16,
  card: 18,
  hero: 23,
  pill: 999,
  round: 999,
} as const;

export const typography = {
  micro: {
    fontSize: 9,
    fontWeight: "700",
    lineHeight: 13,
  },
  caption: {
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 14,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16,
  },
  bodySmall: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
  },
  body: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
  bodyEmphasis: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
  },
  headingSmall: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 24,
  },
  headingMedium: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 28,
  },
  headingLarge: {
    fontSize: 23,
    fontWeight: "700",
    lineHeight: 30,
  },
  display: {
    fontSize: 27,
    fontWeight: "700",
    lineHeight: 34,
  },
} satisfies Record<string, TextStyle>;

export const themes = {
  light: {
    background: palette.cream,
    surface: palette.white,
    surfaceSecondary: "#F1F3EC",
    surfaceSelected: palette.softSage,
    primary: palette.forest,
    primaryPressed: palette.deepForest,
    text: palette.ink,
    textSecondary: palette.secondaryInk,
    textMuted: palette.muted,
    border: palette.border,
    success: palette.success,
    warning: palette.warning,
    critical: palette.critical,
    offline: palette.offline,
  },
  dark: {
    background: palette.darkBg,
    surface: palette.darkSurface,
    surfaceSecondary: palette.darkElevated,
    surfaceSelected: "#293C2E",
    primary: palette.sage,
    primaryPressed: "#B8CCB5",
    text: palette.darkText,
    textSecondary: palette.darkSecondary,
    textMuted: "#B0BFB2",
    border: palette.darkBorder,
    success: "#86C995",
    warning: "#F0BE68",
    critical: "#F18B83",
    offline: "#AAB6C2",
  },
} as const;

export type ThemeMode = keyof typeof themes;
export type AppTheme = {
  [K in keyof typeof themes.light]: string;
};

export const componentTokens = {
  desktopSidebarWidth: 236,
  desktopContentPadding: 30,
  mobilePagePadding: 20,
  mobileSectionGap: 15,
  metricCardRadius: radius.card,
  metricCardPadding: spacing.lg,
  buttonHeight: 44,
  buttonRadius: radius.md,
  inputHeight: 48,
  iconButtonSize: 40,
  mobileBottomNavHeight: 52,
} as const;

export const elevation = {
  card: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  } satisfies ViewStyle,
  floating: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 5,
  } satisfies ViewStyle,
} as const;
