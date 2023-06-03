import React, { useEffect, useState } from 'react';
import { ScrollView , StyleSheet, Text, Image} from 'react-native';
import Component from '../components/Component';
import Axios from '../services/Axios';

export default()=>{

    const [image,setImage] = useState(null); 
    const [name,setName] = useState("Carregando...");


    useEffect(() => {
        Axios.get("/diegomarqueszs").then((res) => {
            setName(res.data.name);
            setImage(res.data.avatar_url);
        })
        .catch((err) => {
            console.log(err);
        });
     },[]);

    return(
        <ScrollView contentContainerStyle={styles.containerInit}>
            <Image style={styles.image} source={{uri:image}}/>
            <Text>{name}</Text>
            
            {/*<Component title='Ola pessoal' color='#ddd'/>*/}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    containerInit: {
        flex: 1,//indica que a tela pode crescer e diminuir
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
}); 