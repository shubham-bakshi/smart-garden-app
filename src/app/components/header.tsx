import { StyleSheet, Text, View } from 'react-native';
import { colors, spacings } from '../global-styles';

export function Header() {
  return (
    <View style={style.container}>
      <Text >Header</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        padding: spacings.md,
        backgroundColor: colors.brand.botanicalMist,
    }
});