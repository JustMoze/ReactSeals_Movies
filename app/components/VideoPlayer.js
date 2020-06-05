import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Video } from 'expo-av';

import ControlBar from './ControlBar';
import {
    millisToMinutesAndSeconds,
    calculateWidth
} from '../config/calculations';
import { width, height } from '../config/phoneDetails';

function VideoPlayer({ uri }) {
    const [endTime, setEndTime] = useState('--:--');
    const [play, setPlay] = useState(false);
    const [playbackStatus, setPlaybackStatus] = useState();
    const [startTime, setStartTime] = useState('00:00');
    const [videoRef, setVideoRef] = useState();
    const [width, setWidth] = useState(0);

    const playVideo = () => {
        if (videoRef && !play) {
            setPlay(true);
            videoRef.playAsync();
        }
    };
    const pauseVideo = () => {
        if (videoRef && play) {
            setPlay(false);
            videoRef.pauseAsync();
        }
    };
    const setToFullScreen = () => {
        if (videoRef) {
            videoRef.presentFullscreenPlayer();
        }
    };
    const onPlaybackStatusUpdate = async (playbackStatus) => {
        await setPlaybackStatus(playbackStatus);
        setEndTime(millisToMinutesAndSeconds(playbackStatus.durationMillis));
        if (playbackStatus.isPlaying) {
            setStartTime(
                millisToMinutesAndSeconds(playbackStatus.positionMillis)
            );
            setWidth(
                calculateWidth(
                    playbackStatus.positionMillis,
                    playbackStatus.durationMillis
                )
            );
        }
    };
    const skip15SeksVideo = () => {
        if (videoRef && playbackStatus) {
            if (
                playbackStatus.durationMillis - playbackStatus.positionMillis >
                15000
            ) {
                videoRef.playFromPositionAsync(
                    playbackStatus.positionMillis + 15000
                );
            } else {
                videoRef.playFromPositionAsync(playbackStatus.durationMillis);
            }
        }
    };
    const rotateBack15SeksVideo = () => {
        if (videoRef && playbackStatus) {
            if (playbackStatus.positionMillis > 15000) {
                videoRef.playFromPositionAsync(
                    playbackStatus.positionMillis - 15000
                );
            } else {
                videoRef.playFromPositionAsync(0);
            }
        }
    };
    return (
        <>
            <Video
                fadeInDuration={300}
                isMuted={false}
                onPlaybackStatusUpdate={onPlaybackStatusUpdate}
                rate={1.0}
                ref={(ref) => {
                    setVideoRef(ref);
                }}
                resizeMode="cover"
                showControlsOnLoad={false}
                source={{
                    uri: uri
                }}
                style={styles.video}
                volume={1.0}
            />
            <View style={styles.controlBar}>
                <ControlBar
                    endTime={endTime}
                    onBack={rotateBack15SeksVideo}
                    onChangeScreen={setToFullScreen}
                    onPause={pauseVideo}
                    onPlay={playVideo}
                    onSkip={skip15SeksVideo}
                    play={play}
                    startTime={startTime}
                    width={width}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    controlBar: {
        alignSelf: 'center',
        paddingTop: 40,
        width: '80%'
    },
    video: {
        height: height * 0.5,
        width: width * 0.9
    }
});
export default VideoPlayer;
