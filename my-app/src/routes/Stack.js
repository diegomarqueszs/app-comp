import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InitScreen from '../views/InitScreen';
import SecondScreen from '../views/secondScreen';

export default()=>{

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="InitScreen">
                <Stack.Screen name="InitScreen" component={InitScreen}/>
                <Stack.Screen name="SecondScreen" component={SecondScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}