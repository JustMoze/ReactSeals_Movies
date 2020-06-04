import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from './AppText';
import defaultStyles from '../config/styles';

function Header({ title, NavigatorLeft, NavigatorRight, style }) {
    const configureTitle = () => {
        var slicedTitle = '';
        if (title.length > 20) {
            slicedTitle = title.slice(0, 17) + '...';
        }
        if (slicedTitle) {
            return slicedTitle;
        } else return title;
    };
    return (
        <View style={styles.container}>
            {NavigatorLeft && (
                <View style={styles.backContainer}>{NavigatorLeft}</View>
            )}
            <View style={styles.titleContainer}>
                <AppText style={styles.titleStile}>{configureTitle()}</AppText>
            </View>
            {NavigatorRight && (
                <View style={styles.editContainer}>{NavigatorRight}</View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    backContainer: {
        padding: 5
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
        padding: 5
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 5
    },
    titleStile: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 25
    }
});
export default Header;
