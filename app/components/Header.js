import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import AppText from './AppText';
import defaultStyles from '../config/styles';

function Header({ children, NavigatorLeft, NavigatorRight, style }) {
    return (
        <View style={styles.container}>
            {NavigatorLeft && (
                <View style={styles.backContainer}>{NavigatorLeft}</View>
            )}
            <View style={styles.titleContainer}>
                <AppText style={style}>{children}</AppText>
            </View>
            {NavigatorRight && (
                <View style={styles.editContainer}>{NavigatorRight}</View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    backContainer: {
        padding: 5,
        width: '33%'
    },
    container: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.secondary,
        flexDirection: 'row',
        height: 70,
        justifyContent: 'center',
        padding: 5,
        width: '100%'
    },
    editContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 5,
        width: '33%'
    },
    titleContainer: {
        alignItems: 'center',
        padding: 5,
        width: '33%'
    }
});
export default Header;
