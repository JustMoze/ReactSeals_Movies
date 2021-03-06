import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from './AppText';
import defaultStyles from '../config/styles';
import ListItemSeparator from './ListItemSeparator';

function CategoryTitle({ title, style }) {
    return (
        <View style={[styles.container, style]}>
            <AppText style={styles.title}>{title}</AppText>
            <ListItemSeparator style={styles.separator} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        width: '100%'
    },
    separator: {
        backgroundColor: defaultStyles.colors.primary,
        height: 1
    },
    title: {
        color: defaultStyles.colors.secondary,
        fontWeight: 'bold'
    }
});
export default CategoryTitle;
