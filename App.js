import React from 'react';

import DetailsPageScreen from './app/screens/DetailsPageScreen';
import Screen from './app/components/Screen';
import BrowsePageScreen from './app/screens/BrowsePageScreen';

export default function App() {
    return (
        <Screen>
            <BrowsePageScreen />
        </Screen>
    );
}
