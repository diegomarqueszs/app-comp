import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';



export default function App() {

  const [aux, setAux] = useState(false);

  useEffect(() => {
    console.log('Teste sem preenchimento');
  },[]);

  useEffect(() => {
    console.log('Teste');
  },[aux]);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button} onPress={()=> setAux(!aux)}>
        <Text style={styles.title}>Switch</Text> 
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,//indica que a tela pode crescer e diminuir
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#1793a6',
  }
});
