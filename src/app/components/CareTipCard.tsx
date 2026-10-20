import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { palette, radius, spacing, typography } from '../constants/theme';
import { useTheme } from '../theme/useTheme';
import { Card } from './ui/card';

type CareTipCardProps = {
    plantName: string;
    message?: string;
    description?: string;
    onPress: () => void;
}

export const CareTipCard = ({
    plantName,
    message,
    description,
    onPress
}: CareTipCardProps) => {
    const {theme} = useTheme();
    const styles = useMemo(() => (
        StyleSheet.create({
            content: {
                gap: spacing.lg
            },
            badge: {
                alignSelf: "flex-start",
                backgroundColor: palette.leaf,
                paddingHorizontal: spacing.mdPlus,
                paddingVertical: spacing.sm,
                borderRadius: radius.pill
            },
            badgeText: {
                ...typography.body,
                color: theme.text,
            },
            message: {
                ...typography.headingLarge,
                color: theme.text
            },
            description: {
                ...typography.label,
                color: theme.textMuted
            },
            button: {
                alignSelf: "flex-start",
                backgroundColor: theme.primary,
                borderRadius: radius.md,
                paddingHorizontal: spacing.mdPlus,
                paddingVertical: spacing.sm
            },
            buttonText: {
                color: theme.surfaceSelected,
                ...typography.label
            }
        })
    ), []);
  return (
    <Card backgroundColor={theme.background} padding={spacing.lg} style={{borderColor: 'transparent'}}>
        <View style={styles.content}>
            <View style={styles.badge}>
                <Text style={styles.badgeText}>NEEDS A LITTLE LOVE</Text>
            </View>

            <Text style={styles.message}>
                {message || `Your ${plantName} needs attention.`}
            </Text>

            <Text style={styles.description}>
                {description}
            </Text>

            <Pressable onPress={onPress} style={styles.button} accessibilityRole='button'>
                <Text style={styles.buttonText}>
                    View care tip
                </Text>
            </Pressable>
        </View>
    </Card>
  )
}
