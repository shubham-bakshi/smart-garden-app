import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from './theme/useTheme';
import { useAuth } from './auth/AuthContext';
import { Redirect } from 'expo-router';

export default function Index() {
  const { theme, mode } = useTheme();
  const styles = generateStyles(theme);
  const { token, isLoading } = useAuth();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style={mode === 'dark' ? 'light' : 'dark'} />
        <ActivityIndicator size="large" color={theme.primary} />
      </SafeAreaView>
    );
  }

  return <Redirect href={token ? '/(main)' : '/(auth)/login'} />;
}

const generateStyles = (theme: ReturnType<typeof useTheme>['theme']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
  });
