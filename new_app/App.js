import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Component from './src/components/componnent1';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello <Text style={styles.hightlight}>World!</Text></Text>
      <Component />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{//cria um sytle para um objeto
    fontSize: 34,
    fontWeight: 'bold',
  },
  hightlight:{
    color: '#1793a6',
  }
});
