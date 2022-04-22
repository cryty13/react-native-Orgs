import React from 'react';
import { Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Produtor from '../telas/Produtor';
import Home from '../telas/Home';

const Stack = createNativeStackNavigator()

export default function ProdutorRotas({ComponentePrincipal = Home}) {
    return <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='HomeScreen' component={ComponentePrincipal}></Stack.Screen>
            <Stack.Screen name='Produtor' component={Produtor}></Stack.Screen>
        </Stack.Navigator>
}
