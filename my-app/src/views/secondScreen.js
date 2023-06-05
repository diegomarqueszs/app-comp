import React from "react";
import { ScrollView , StyleSheet, Text, Image} from 'react-native';

export default()=>{
    return(
        <ScrollView contentContainerStyle={styles.containerInit}>
            <Text>Second Screen</Text>
        </ScrollView>
    );
};