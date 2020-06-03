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
        width: '100%',
        paddingVertical: 15
    },
    separator: {
        height: 1,
        backgroundColor: defaultStyles.colors.primary
    },
    title: {
        color: defaultStyles.colors.primary,
        fontWeight: 'bold'
    }
});
export default CategoryTitle;
