import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreen } from "./screens/home-screen";
import { useTheme } from "./theme/useTheme";

export default function Index() {
  const { theme, mode } = useTheme();
  const styles = generateStyles(theme);

  return (
      <SafeAreaView style={styles.container}>
        <StatusBar style={mode === 'dark' ? 'light' : 'dark'} />
        <HomeScreen />
      </SafeAreaView>
  );
}

const generateStyles = (theme: ReturnType<typeof useTheme>["theme"]) => (
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
  })
)