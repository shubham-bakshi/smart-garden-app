import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { HomeScreen } from "./screens/home-screen";
import { useTheme } from "./theme/useTheme";
import { spacing } from "./constants/theme";

export default function Index() {
  const { theme, mode } = useTheme();
  const styles = generateStyles(theme);

  return (
      <View style={styles.container}>
        <StatusBar style={mode === 'dark' ? 'light' : 'dark'} />
        <HomeScreen />
      </View>
  );
}

const generateStyles = (theme: ReturnType<typeof useTheme>["theme"]) => (
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: spacing.section,
      backgroundColor: theme.background,
    },
  })
)