import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from 'Home.js';
import { Detail } from 'Detail.js';

const Stack = createStackNavigator();

const MainStack = () => {
    return (<Stack.Navigator>
        <Stack.Screen
            name="HomeScreen"
            component={Home}
            options={{
                headerTitle: "Dashboard",
                headerTitleAlign: 'center'
            }}
        />
        <Stack.Screen
            name="DetailScreen"
            component={Detail}
            options={{
                headerTitle: "Detail",
                headerTitleAlign: 'center'
            }}
        />
    </Stack.Navigator>)
}

export default class Routes extends Component {

    render() {
        return (
            <NavigationContainer>
                <MainStack />
            </NavigationContainer>

        );
    }
};