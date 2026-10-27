import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/header';
import { PlantCard } from '../components/PlantCard';
import { spacing, typography } from '../constants/theme';
import { useTheme } from '../theme/useTheme';
import { Card } from '../components/ui/card';

const PLANTS = [
  { id:'monstera-plant', name: 'Monstera', room: 'Living room', moistureLevel: 68 },
  { id:'snake-plant', name: 'Snake Plant', room: 'Bedroom', moistureLevel: 42 },
  { id:'peace-lily', name: 'Peace Lily', room: 'Kitchen', moistureLevel: 76 },
  { id:'fiddle-leaf-Fig', name: 'Fiddle Leaf Fig', room: 'Office', moistureLevel: 54 },
  { id:'calathea', name: 'Calathea', room: 'Bathroom', moistureLevel: 83 },
] as const;

export function HomeScreen() {
  const { theme } = useTheme();
  const [showAllPlants, setShowAllPlants] = useState(false);
  const visiblePlants = showAllPlants ? PLANTS : PLANTS.slice(0, 3);

  const styles = useMemo(() => generateStyles(theme), [theme]);

  const needsCheckingCount = PLANTS.filter((plant) => plant.moistureLevel < 30).length;

  return (
    <View style={styles.container}>
        <Header />

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContainer}
        >
          <View>
            <Text style={styles.greetContainer}>
              Good Morning,
            </Text>
            <Text style={styles.nameContainer}>
              Nityam
            </Text>
            <Text style={styles.greetSubheading}>
              Your plants at a glance
            </Text>
          </View>

          <Card>
            <View style={styles.statusCard}>
              <Text style={styles.statusCardTitle}>Plant Health</Text>
              <Text style={styles.statusCardBody}>{PLANTS.length} Plants. {needsCheckingCount === 0 ? 'All are happy!' : `${needsCheckingCount} Needs a check.`}</Text>
            </View>
          </Card>

          <View style={styles.plantsContainer}>
            <View style={styles.plantsHeader}>
              <Text style={styles.plantsTitle}>My Plants</Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={showAllPlants ? 'Show fewer plants' : 'Show all plants'}
                accessibilityState={{ expanded: showAllPlants }}
                onPress={() => setShowAllPlants((showAll) => !showAll)}
                style={({ pressed }) => [
                  styles.seeAllButton,
                  pressed && styles.seeAllButtonPressed,
                ]}
                hitSlop={spacing.sm}
              >
                <Text style={styles.seeAllText}>
                  {showAllPlants ? 'Show less' : 'See all'}
                </Text>
              </Pressable>
            </View>

            <View style={styles.plantsList}>
              {visiblePlants.map((plant) => (
                <PlantCard
                  key={plant.id}
                  name={plant.name}
                  room={plant.room}
                  moistureLevel={plant.moistureLevel}
                />
              ))}
            </View>
          </View>
        </ScrollView>
    </View>
  )
}

const generateStyles = (theme: ReturnType<typeof useTheme>["theme"]) => 
  StyleSheet.create({
    container: {
      flex: 1,
      gap: spacing.lg,
    },
    scrollView: {
      flex: 1,
      paddingHorizontal: spacing.xl,
    },
    scrollContainer: {
      flexGrow: 1,
      gap: spacing.lg,
      paddingBottom: spacing.xl,
    },
    greetContainer: {
      ...typography.headingMedium,
      color: theme.text,
      fontWeight: 400
    },
    nameContainer: {
      ...typography.pageTitle,
      color: theme.text,
    },
    greetSubheading: {
      ...typography.bodySmall,
      color: theme.textMuted
    },
    statusCard: {
      gap: spacing.md,
      padding: spacing.xs,
      paddingBottom: spacing.xxl,
    },
    statusCardTitle: {
      color: theme.textMuted,
      ...typography.body
    },
    statusCardBody: {
      color: theme.text,
      ...typography.headingSmall
    },
    plantsHeader: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    plantsTitle: {
      color: theme.text,
      ...typography.headingLarge,
    },
    seeAllButton: {
      paddingVertical: spacing.sm,
    },
    seeAllButtonPressed: {
      opacity: 0.6,
      transform: [{ scale: 0.98 }],
    },
    seeAllText: {
      color: theme.primary,
      ...typography.body,
    },
    plantsList: {
      gap: spacing.md,
    },
    plantsContainer: {
      gap: spacing.lg,
    },
  })