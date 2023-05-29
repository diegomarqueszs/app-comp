import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default( props )=>{
    const styles = StyleSheet.create({ //cria um objeto com as propriedades de estilo   
        container: {
            flex: 1,//indica que a tela pode crescer e diminuir
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: props.color,
        },
    });
    
    return(
        <View style={styles.container}>
           
            <Text>{props.title}</Text>
            {props.children}
        </View>
    );
};

