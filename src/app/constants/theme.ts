import type { TextStyle, ViewStyle } from "react-native";

const interRegular = "Inter_400Regular";
const interMedium = "Inter_500Medium";
const interSemiBold = "Inter_600SemiBold";

export const palette = {
  // Core values taken directly from the Verdant Figma variables.
  brand: "#193F32",
  forest: "#193F32",
  deepForest: "#14221B",
  background: "#FAFAF7",
  cream: "#FAFAF7",
  surface: "#FFFFFF",
  white: "#FFFFFF",
  ink: "#14221B",
  secondaryInk: "#66716A",
  muted: "#66716A",
  border: "#E9EBE4",
  hairline: "#E9EBE4",
  onBrand: "#FAFAF7",
  attention: "#A15C07",
  attentionSoft: "#FBF0DC",
  track: "#ECEEE8",
  healthy: "#2F6B4F",

  // Supporting botanical and sensor colors.
  leaf: "#2F6B4F",
  sage: "#9CC28C",
  softSage: "#E9EBE4",
  paleSage: "#ECEEE8",
  moss: "#2F6B4F",
  leafShade: "#193F32",
  clay: "#A15C07",
  darkBg: "#151C18",
  darkSurface: "#222D26",
  darkElevated: "#2E4033",
  darkText: "#E8EEE7",
  darkSecondary: "#B0BFB2",
  darkBorder: "#4F5D53",

  soil: "#2F6B4F",
  lightSensor: "#477DA6",
  temperature: "#BA6E21",
  warningBg: "#FBF0DC",
  infoBg: "#DEEDF5",
  plantHighlight: "#E9EBE4",

  success: "#2F6B4F",
  warning: "#A15C07",
  critical: "#B94B45",
  offline: "#697580",
} as const;

export const spacing = {
  none: 0,
  xxxs: 3,
  xxs: 2,
  xs: 4,
  xsPlus: 6,
  sm: 8,
  smPlus: 10,
  md: 12,
  mdPlus: 14,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  section: 48,
  desktopPage: 64,
  page: 20,
} as const;

export const radius = {
  xs: 6,
  sm: 8,
  md: 10,
  lg: 12,
  xl: 16,
  image: 16,
  button: 20,
  iconContainer: 22,
  card: 24,
  hero: 24,
  track: 2,
  pill: 999,
  round: 999,
} as const;

export const typography = {
  micro: {
    fontFamily: interMedium,
    fontSize: 11,
    fontWeight: "500",
    lineHeight: 14,
  },
  caption: {
    fontFamily: interRegular,
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
  },
  label: {
    fontFamily: interMedium,
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 16,
  },
  bodySmall: {
    fontFamily: interRegular,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
  },
  body: {
    fontFamily: interRegular,
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 22,
  },
  bodyEmphasis: {
    fontFamily: interSemiBold,
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 22,
  },
  headingSmall: {
    fontFamily: interSemiBold,
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 24,
  },
  headingMedium: {
    fontFamily: interSemiBold,
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 28,
  },
  headingLarge: {
    fontFamily: interSemiBold,
    fontSize: 25.5,
    fontWeight: "600",
    lineHeight: 32,
  },
  display: {
    fontFamily: interSemiBold,
    fontSize: 27,
    fontWeight: "600",
    lineHeight: 34,
  },
  pageTitle: {
    fontFamily: interSemiBold,
    fontSize: 44,
    fontWeight: "600",
    lineHeight: 52,
  },
} satisfies Record<string, TextStyle>;

export const themes = {
  light: {
    background: palette.background,
    surface: palette.surface,
    surfaceSecondary: palette.track,
    surfaceSelected: palette.hairline,
    primary: palette.brand,
    primaryPressed: palette.deepForest,
    onPrimary: palette.onBrand,
    text: palette.ink,
    textSecondary: palette.secondaryInk,
    textMuted: palette.muted,
    border: palette.hairline,
    attentionBackground: palette.attentionSoft,
    track: palette.track,
    success: palette.healthy,
    warning: palette.attention,
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
    onPrimary: palette.darkBg,
    text: palette.darkText,
    textSecondary: palette.darkSecondary,
    textMuted: palette.darkSecondary,
    border: palette.darkBorder,
    attentionBackground: "#453522",
    track: palette.darkElevated,
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
  desktopContentPadding: spacing.desktopPage,
  desktopSectionGap: spacing.section,
  mobilePagePadding: spacing.page,
  mobileSectionGap: spacing.lg,
  metricCardRadius: radius.card,
  metricCardPadding: spacing.lg,
  buttonHeight: 44,
  buttonRadius: radius.button,
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
