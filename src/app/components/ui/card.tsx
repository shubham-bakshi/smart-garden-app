import { ReactNode, useMemo } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { radius, spacing } from '../../constants/theme';
import { useTheme } from '../../theme/useTheme';

type CardProps = {
    children: ReactNode;
    style?: ViewStyle;
    padding?: number;
    backgroundColor?: string;
};

export const Card = ({
    children,
    style,
    padding = spacing.lg,
    backgroundColor
}: CardProps) => {
    const { theme } = useTheme();
    const styles = useMemo(() => (
        StyleSheet.create({
            container: {
                backgroundColor: theme.surface,
                borderColor: theme.border,
                borderWidth: 1,
                borderRadius: radius.card,
                padding
            }
        })
    ), [theme, padding, backgroundColor]);
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({})