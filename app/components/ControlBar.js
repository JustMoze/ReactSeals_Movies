import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

import Icon from './Icon';
import ProgressBar from './ProgressBar';
import { height } from '../config/phoneDetails';

const controlBarSize = height / 14;

function ControlBar({
    endTime,
    onBack,
    onChangeScreen,
    onPlay,
    onPause,
    onSkip,
    play,
    startTime,
    width = 40
}) {
    return (
        <View style={styles.example}>
            <View style={styles.container}>
                <TouchableOpacity onPress={onBack} style={styles.option}>
                    <Icon name="rotate-left" size={controlBarSize * 0.8} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={play ? onPause : onPlay}
                    style={styles.option}
                >
                    <Icon
                        name={
                            play
                                ? 'pause-circle-outline'
                                : 'play-circle-outline'
                        }
                        size={controlBarSize * 0.8}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={onSkip} style={styles.option}>
                    <Icon name="rotate-right" size={controlBarSize * 0.8} />
                </TouchableOpacity>
                <View style={styles.progressBarContainer}>
                    <ProgressBar
                        absluteFill={styles.absluteFill}
                        endTime={endTime}
                        progressBar={styles.progressBar}
                        startTime={startTime}
                        width={width + '%'}
                    />
                </View>
                <TouchableOpacity
                    onPress={onChangeScreen}
                    style={styles.option}
                >
                    <Icon name="fullscreen" size={controlBarSize * 0.8} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    absluteFill: {
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
    },
    container: {
        backgroundColor: '#393e46',
        borderRadius: controlBarSize / 2,
        flexDirection: 'row',
        height: controlBarSize,
        paddingVertical: controlBarSize * 0.1,
        paddingHorizontal: 15
    },
    example: {
        alignItems: 'center'
    },
    progressBar: {
        backgroundColor: 'white',
        borderColor: '#000',
        borderRadius: 5,
        borderWidth: 1,
        height: 10,
        width: '100%'
    },
    progressBarContainer: {
        flex: 1,
        paddingTop: controlBarSize * 0.1
    },
    option: {
        paddingLeft: 5
    }
});
export default ControlBar;
