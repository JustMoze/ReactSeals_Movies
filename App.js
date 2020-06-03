import React from 'react';

import HomeScreen from './app/screens/HomeScreen';
import BrowsePageScreen from './app/screens/BrowsePageScreen';
import Screen from './app/components/Screen';
import OptionsList from './app/components/OptionsList';

export default function App() {
    return (
        <Screen>
            <BrowsePageScreen />
        </Screen>
    );
}
