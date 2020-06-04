import React from 'react';

import PlayerPageScreen from './app/screens/PlayerPageScreen';
import movies from './app/services/data';
import Screen from './app/components/Screen';

export default function App() {
    return (
        <Screen>
            <PlayerPageScreen movie={movies[0]} />
        </Screen>
    );
}
