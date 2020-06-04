import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from './AppText';
import defaultStyle from './../config/styles';

function ProgressBar({ absluteFill, endTime, progressBar, startTime, width }) {
    return (
        <>
            <View style={styles.info}>
                <View style={styles.startTime}>
                    <AppText style={styles.text}>{startTime}</AppText>
                </View>
                <View style={styles.endTime}>
                    <AppText style={styles.text}>{endTime}</AppText>
                </View>
            </View>
            <View style={progressBar}>
                <View
                    style={[
                        absluteFill,
                        {
                            backgroundColor: defaultStyle.colors.primary,
                            width
                        }
                    ]}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    endTime: {
        width: '50%',
        alignItems: 'flex-end'
    },
    info: {
        flexDirection: 'row'
    },

    startTime: {
        width: '50%',
        alignItems: 'baseline'
    },
    text: {
        color: defaultStyle.colors.primary,
        fontSize: 10
    },
    width: {
        height: 20
    }
});
export default ProgressBar;
