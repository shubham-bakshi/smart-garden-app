import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { spacing, typography } from "../constants/theme";
import { useTheme } from "../theme/useTheme";

export function Header() {
  const { theme } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          paddingHorizontal: spacing.xl,
          paddingVertical: spacing.sm,
        },
        header: {
          ...typography.headingLarge,
          color: theme.primary,
        },
        subheader: {
          ...typography.bodySmall,
          color: theme.textMuted,
        },
      }),
    [theme]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Verdant</Text>
      <Text style={styles.subheader}>YOUR PLANT COMPANION</Text>
    </View>
  );
}
