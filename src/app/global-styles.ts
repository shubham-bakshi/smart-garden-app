import { palette, spacing, themes, typography as typeScale } from "./constants/theme";

// Compatibility exports for older call sites. Values are sourced from the
// canonical theme tokens so this file cannot drift from constants/theme.ts.
export const colors = {
  brand: {
    forest: palette.forest,
    deepForest: palette.deepForest,
    sage: palette.sage,
    softSage: palette.softSage,
    clay: palette.clay,
    botanicalMist: palette.softSage,
  },
  light: {
    background: themes.light.background,
    surface: themes.light.surface,
    surfaceSecondary: themes.light.surfaceSecondary,
    surfaceSelected: themes.light.surfaceSelected,
    text: themes.light.text,
    textSecondary: themes.light.textSecondary,
    border: themes.light.border,
    primary: themes.light.primary,
  },
  dark: {
    background: themes.dark.background,
    surface: themes.dark.surface,
    surfaceElevated: themes.dark.surfaceSecondary,
    surfaceSelected: themes.dark.surfaceSelected,
    text: themes.dark.text,
    textSecondary: themes.dark.textSecondary,
    border: themes.dark.border,
    primary: themes.dark.primary,
  },
  status: {
    healthy: { light: palette.healthy, dark: "#86C995" },
    attention: { light: palette.attention, dark: "#F0BE68" },
    critical: { light: palette.critical, dark: "#F18B83" },
    offline: { light: palette.offline, dark: "#AAB6C2" },
    info: { light: palette.lightSensor, dark: "#7DC5E8" },
  },
  charts: {
    soilMoisture: palette.soil,
    lightLevel: palette.lightSensor,
    temperature: palette.temperature,
    battery: palette.moss,
    gridLight: palette.border,
    gridDark: palette.darkBorder,
  },
} as const;

export const spacings = {
  xs: spacing.xs,
  sm: spacing.sm,
  md: spacing.lg,
  lg: spacing.xxl,
  xl: spacing.xxxl,
} as const;

export const typography = {
  title: typeScale.pageTitle.fontSize,
  heading: typeScale.headingMedium.fontSize,
  body: typeScale.body.fontSize,
  caption: typeScale.caption.fontSize,
  subheading: typeScale.label.fontSize,
} as const;
