import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { spacing, typography } from "../constants/theme";
import { useTheme } from "../theme/useTheme";

export function Header() {
  const { theme } = useTheme();

  const styles = useMemo(() => generateStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Verdant</Text>
      <Text style={styles.subheader}>YOUR PLANT COMPANION</Text>
    </View>
  );
}

const generateStyles = (theme: ReturnType<typeof useTheme>["theme"]) => 
  StyleSheet.create({
    container: {
      paddingHorizontal: spacing.xl,
    },
    header: {
      ...typography.headingMedium,
      color: theme.primary,
    },
    subheader: {
      ...typography.caption,
      color: theme.textMuted,
    },
  })
