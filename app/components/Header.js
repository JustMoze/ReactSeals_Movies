import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from './AppText';
import defaultStyles from '../config/styles';
import { width } from '../config/phoneDetails';

function Header({ title, NavigatorLeft, NavigatorRight }) {
    const configureTitle = () => {
        var slicedTitle = '';
        if (title.length > 9) {
            slicedTitle = title.slice(0, 9) + '...';
        }
        if (slicedTitle) {
            return slicedTitle;
        } else return title;
    };
    return (
        <View style={styles.container}>
            <View style={styles.itemsContainer}>
                <View style={styles.backContainer}>
                    {NavigatorLeft ? NavigatorLeft : null}
                </View>
                <View style={styles.titleContainer}>
                    <AppText style={styles.titleStile}>
                        {configureTitle()}
                    </AppText>
                </View>
                <View style={styles.editContainer}>
                    {NavigatorRight ? NavigatorRight : null}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 5,
        width: width / 3
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
        width: width / 4
    },
    itemsContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 15
    },
    titleContainer: {
        alignItems: 'flex-start',
        flex: 1,
        paddingVertical: 5,
        paddingRight: 10,
        paddingLeft: 20
    },
    titleStile: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 25
    }
});
export default Header;
