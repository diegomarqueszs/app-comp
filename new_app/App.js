import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Component from './src/components/componnent1';

export default function App() {
  const [count, setCount] = useState(0);//boa pratica usetate no inicio
  const [people, setPeople] = useState([
    {id: '1',name: 'João'},
    {id: '2',name: 'Maria'},
    {id: '3',name: 'José'},
    {id: '4',name: 'Pedro'},
    {id: '5',name: 'Ana'},
    {id: '6',name: 'Paulo'},
    {id: '7',name: 'Lucas'},

  ]);


  function handleIncrement(){ //boa pratica handle
    setCount(count + 1); //sobrescreve o valor de count, só é possivel alterar dessa forma
  }

  function handleAddNewPeople(){
    const newPeople = {id: Math.random(), name: 'Diego Marques'};

    setPeople([...people, newPeople]); //adiciona um novo item no array
  }

  function handleRemovePeople(id){ //remove um item do array
    const filterPeople = people.filter((item) => item.id != id);

    setPeople(filterPeople);

  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello <Text style={styles.hightlight}>World!</Text></Text>
      <Component />
      <StatusBar style="auto" />
      {/*<Text style={styles.title}>{count}</Text>
      <TouchableOpacity onPress={handleIncrement}> 
        <Text>Adicionar</Text> 
      </TouchableOpacity>
      */}
      {people.map((item)=>
        <TouchableOpacity key = { item.id } onPress = {() => handleRemovePeople (item.id)}> 
          <Text style={styles.item} >{item.name}</Text>
        </TouchableOpacity>
        
      )}

      <TouchableOpacity onPress={handleAddNewPeople}> 
        <Text>Adicionar Pessoas</Text> 
      </TouchableOpacity>
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
  },
  item:{
    fontSize: 20,
    color: '#1793a6',
    fontWeight: 'bold',
  }
});
