import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Inicio } from '../Inicio';
import { Detalles } from '../Detalles';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Inicio"
                component={Inicio}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Detalles"
                component={Detalles}
                options={({ route }) => ({
                    title: route.params.movie.Title
                })}
            />
        </Stack.Navigator>
    );

}