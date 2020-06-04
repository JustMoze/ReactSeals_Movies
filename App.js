import React from 'react';

import DetailsPageScreen from './app/screens/DetailsPageScreen';
import Screen from './app/components/Screen';
import BrowsePageScreen from './app/screens/BrowsePageScreen';
import Footer from './app/components/Footer';

export default function App() {
    return (
        <Screen>
            <BrowsePageScreen />
        </Screen>
    );
}
