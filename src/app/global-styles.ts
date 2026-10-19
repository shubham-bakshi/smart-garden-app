
export const colors = {
  brand: {
    forest: '#244C3A',
    deepForest: "#19382B",
    sage: "#91A98C",
    softSage: "#D8E3D2",
    clay: "#D8A28D",
    botanicalMist: "#E3EBDD",
  },

  light: {
    background: "#F7F6F0",
    surface: "#FFFFFF",
    surfaceSecondary: "#F1F3EC",
    surfaceSelected: "#E3EBDD",
    text: "#25342C",
    textSecondary: "#657168",
    border: "#DDE3D9",
    primary: "#244C3A",
  },

  dark: {
    background: "#151C18",
    surface: "#222D26",
    surfaceElevated: "#2C3930",
    surfaceSelected: "#293C2E",
    text: "#E8EEE7",
    textSecondary: "#B0BDB2",
    border: "#455449",
    primary: "#91A98C",
  },

  status: {
    healthy: { light: "#43845A", dark: "#86C995" },
    attention: { light: "#B77924", dark: "#F0BE68" },
    critical: { light: "#B94B45", dark: "#F18B83" },
    offline: { light: "#697580", dark: "#AAB6C2" },
    info: { light: "#347DA3", dark: "#7DC5E8" },
  },

  charts: {
    soilMoisture: "#43845A",
    lightLevel: "#347DA3",
    temperature: "#C78342",
    battery: "#718D61",
    gridLight: "#DDE3D9",
    gridDark: "#455449",
  },
} as const;

export const spacings = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
} as const;

export const typography = {
  title: 28,
  heading: 20,
  body: 16,
  caption: 12,
};