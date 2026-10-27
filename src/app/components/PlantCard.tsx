import { StyleSheet, Text, View } from "react-native";
import { spacing, typography } from "../constants/theme";
import { useTheme } from "../theme/useTheme";
import { Card } from "./ui/card";
import { useMemo } from "react";

type PlantCardProps = {
  name: string;
  room: string;
  moistureLevel: number;
};

export const PlantCard = ({
  name,
  room,
  moistureLevel,
}: PlantCardProps) => {
  const { theme } = useTheme();
  const styles = useMemo(() => generateStyles(theme), [theme]);

  const moisture = Math.min(100, Math.max(0, moistureLevel));

  return (
    <Card padding={spacing.lg}>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.secondary}>{room}</Text>
        <Text style={styles.moisture}>{moisture}%</Text>
        <View
          accessible
          accessibilityRole="progressbar"
          accessibilityLabel={`${name} moisture`}
          accessibilityValue={{ min: 0, max: 100, now: moisture }}
          style={styles.moistureTrack}
        >
          <View style={[styles.moistureFill, { width: `${moisture}%` }]} />
        </View>
      </View>
    </Card>
  );
};

const generateStyles = (theme: ReturnType<typeof useTheme>["theme"]) => 
  StyleSheet.create({
    content: {
      gap: spacing.sm,
    },
    name: {
      ...typography.headingSmall,
      color: theme.text,
    },
    secondary: {
      ...typography.bodySmall,
      color: theme.textSecondary,
    },
    moisture: {
      ...typography.display,
      color: theme.primary,
    },
    moistureTrack: {
      width: "100%",
      height: 12,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: theme.track,
    },
    moistureFill: {
      height: "100%",
      borderRadius: 6,
      backgroundColor: theme.success,
    },
  })
