import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from './../components/Header';
import VideoPlayer from '../components/VideoPlayer';
import ControlBar from '../components/ControlBar';

function PlayerPageScreen({ movie }) {
    return (
        <>
            <Header title={movie.title} style={styles.title} />
            <View style={styles.container}>
                <VideoPlayer />
            </View>
            <View style={styles.controlBar}>
                <ControlBar />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 20
    },
    controlBar: {
        alignSelf: 'center',
        paddingTop: 40,
        width: '80%'
    }
});
export default PlayerPageScreen;
