import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from './AppText';
import defaultStyles from './../config/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Link({ onPress, text }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <AppText style={styles.link}>{text}</AppText>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15
    },
    link: {
        color: defaultStyles.colors.lightBlue,
        textDecorationLine: 'underline'
    }
});
export default Link;
