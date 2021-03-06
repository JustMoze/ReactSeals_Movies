import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import PlayerPageScreen from './app/screens/PlayerPageScreen';
import HomeScreen from './app/screens/HomeScreen';
import BrowsePageScreen from './app/screens/BrowsePageScreen';
import DetailsPageScreen from './app/screens/DetailsPageScreen';
import LoginPageScreen from './app/screens/LoginPageScreen';
import RegisterPageScreen from './app/screens/RegisterPageScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRoutineName="Home"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Browse" component={BrowsePageScreen} />
                <Stack.Screen name="Details" component={DetailsPageScreen} />
                <Stack.Screen name="Player" component={PlayerPageScreen} />
                <Stack.Screen name="Login" component={LoginPageScreen} />
                <Stack.Screen name="Register" component={RegisterPageScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
