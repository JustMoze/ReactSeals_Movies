import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import AppText from './AppText';
import defaultStyles from './../config/styles';
import Icon from './Icon';
import ListItemSeparator from './ListItemSeparator';

function UserRow({ email = null, iconName, label = null, onPress }) {
    return (
        <View style={styles.container}>
            <View style={styles.optionsContainer}>
                <View
                    style={
                        label
                            ? styles.iconContainerCircle
                            : styles.iconContainer
                    }
                >
                    <TouchableOpacity onPress={label && onPress}>
                        <Icon
                            name={iconName}
                            size={50}
                            color={defaultStyles.colors.black}
                        />
                    </TouchableOpacity>
                </View>
                {email && (
                    <View style={styles.info}>
                        <AppText style={styles.label}>User's email: </AppText>
                        <AppText style={[styles.label, styles.email]}>
                            {email}
                        </AppText>
                    </View>
                )}
                {label && (
                    <View style={styles.info}>
                        <AppText style={styles.label}>{label}</AppText>
                    </View>
                )}
            </View>
            <ListItemSeparator style={styles.separator} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.lightGrey,
        marginTop: 15,
        width: '100%'
    },
    email: {
        fontWeight: '300',
        fontSize: 15,
        color: defaultStyles.colors.black
    },
    iconContainer: {
        alignItems: 'flex-start',
        paddingHorizontal: 15,
        paddingTop: 10
    },
    iconContainerCircle: {
        alignItems: 'flex-start',
        backgroundColor: defaultStyles.colors.secondary,
        borderRadius: 40,
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 5
    },
    info: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 10,
        paddingBottom: 10
    },
    label: {
        fontSize: 12,
        paddingTop: 10,
        color: defaultStyles.colors.secondary
    },
    optionsContainer: {
        flexDirection: 'row'
    },
    separator: {
        backgroundColor: defaultStyles.colors.secondary,
        height: 1
    }
});
export default UserRow;
