import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreen } from "./screens/home-screen";
import { useTheme } from "./theme/useTheme";

export default function Index() {
  const { mode } = useTheme();

  return (
    <SafeAreaView>
      <StatusBar style={mode === 'dark' ? 'light' : 'dark'} />
      <HomeScreen />
    </SafeAreaView>
  );
}
