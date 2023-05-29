import React, { StyleSheet } from 'react';
import {ScrollView} from 'react-native';
import Component from '../components/Component';

export default()=>{
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Component title='Ola pessoal' color='#ddd'/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,//indica que a tela pode crescer e diminuir
    },
}); 