import { StyleSheet, Text, View } from 'react-native';
import { palette } from '../../assets/color-pallete';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Tela inicial
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette[900]
  },
  text: {
    color: palette.textLight
  }
})