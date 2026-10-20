import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { spacing, typography } from '../constants/theme';
import { useTheme } from '../theme/useTheme';
import { Card } from './ui/card';

type PlantCardProps = {
    name: string;
    sensorId: string;
    moisture: number;
    status: string;
};

const PlantCard = ({
    name,
    sensorId,
    moisture,
    status
}: PlantCardProps) => {
    const {theme} = useTheme();
    const styles = useMemo(() => (
        StyleSheet.create({
            content: {
                gap: spacing.sm
            },
            name: {
                ...typography.headingSmall,
                color: theme.text,
            },
            secondary: {
                ...typography.bodySmall,
                color: theme.textSecondary
            },
            moisture: {
                ...typography.display,
                color: theme.primary
            }
        })
    ), []);
  return (
    <Card padding={spacing.lg}>
        <View style={styles.content}>
            <Text style={styles.name}>{name}</Text>

            <Text style={styles.secondary}>{sensorId}</Text>

            <Text style={styles.moisture}>{moisture}%</Text>

            <Text style={styles.secondary}>{status}</Text>
        </View>
    </Card>
  )
}

export default PlantCard

const styles = StyleSheet.create({})