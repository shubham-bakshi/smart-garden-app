import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { spacing, typography } from '../constants/theme';
import { useTheme } from '../theme/useTheme';

export function Header() {
  const { theme } = useTheme();

  const style = useMemo(() => (
    StyleSheet.create({
      container: {
        paddingHorizontal: spacing.xl,
        paddingVertical: spacing.sm
      },
      header: {
        ...typography.headingLarge,
        color: theme.primary,
        fontFamily: 'DMSans_700Bold'
      },
      subheader: {
        ...typography.bodySmall,
        color: theme.textMuted,
        fontFamily: 'DMSans_400Regular'
      }
    })
  ), [theme]);

  return (
    <View style={style.container}>
      <Text style={style.header}>Verdant</Text>
      <Text style={style.subheader}>YOUR PLANT COMPANION</Text>
    </View>
  )
}
