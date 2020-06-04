import React from 'react';
import { StyleSheet } from 'react-native';
import { Video } from 'expo-av';

import { width, height } from '../config/phoneDetails';

function VideoPlayer(props) {
    return (
        <Video
            style={styles.video}
            source={{
                uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
            }}
            showControlsOnLoad={false}
            fadeInDuration={300}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{ width: width * 0.9, height: height * 0.5 }}
        />
    );
}

const styles = StyleSheet.create({
    video: {
        width: width * 0.9
    }
});
export default VideoPlayer;
