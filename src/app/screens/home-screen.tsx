import { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CareTipCard } from '../components/CareTipCard';
import { Header } from '../components/header';
import PlantCard from '../components/PlantCard';
import { spacing, typography } from '../constants/theme';
import { useTheme } from '../theme/useTheme';

export function HomeScreen() {
  const { theme } = useTheme();

  const styles = useMemo(() => (
    StyleSheet.create({
      container: {
        padding: spacing.xl,
        backgroundColor: theme.background,
        gap: spacing.lg
      },
      scrollContainer: {
        gap: spacing.lg
      },
      greetContainer: {
        ...typography.headingLarge,
        color: theme.text,
      },
      greetSubheading: {
        ...typography.bodySmall,
        color: theme.textMuted
      }
    })
  ), [theme]);

  return (
    <View style={styles.container}>
        <Header />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View>
            <Text style={styles.greetContainer}>
              Good Morning
            </Text>
            <Text style={styles.greetSubheading}>
              Your plant check-in is ready
            </Text>
          </View>

          <CareTipCard 
            plantName='Monstera'
            message='Your Monstera is thirsty.'
            description='Soil moisture is low. Time for a small drink.'
            onPress={() => console.log("Open monstera care tips")}
          />

          <View>
            <PlantCard
              name='Monstera'
              sensorId='Sensor 01'
              moisture={68}
              status='Healthy'
            ></PlantCard>
          </View>
        </ScrollView>
    </View>
  )
}
