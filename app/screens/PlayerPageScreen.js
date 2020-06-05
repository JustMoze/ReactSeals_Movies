import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from './../components/Header';
import VideoPlayer from '../components/VideoPlayer';

function PlayerPageScreen({ movie }) {
    return (
        <>
            <Header title={movie.title} style={styles.title} />
            <View style={styles.container}>
                <VideoPlayer uri="http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 20
    }
});
export default PlayerPageScreen;
