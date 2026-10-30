import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeScreen } from '../screens/home-screen';
import { useTheme } from '../theme/useTheme';

export default function AppHome() {
  const { theme, mode } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar style={mode === 'dark' ? 'light' : 'dark'} />
      <HomeScreen />
    </SafeAreaView>
  );
}
