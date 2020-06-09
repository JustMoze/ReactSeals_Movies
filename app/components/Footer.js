import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import defaultStyle from './../config/styles';
import Icon from './Icon';
import AppText from './AppText';

const footerOptions = [
    {
        label: 'Romantic',
        iconName: 'heart',
        iconColor: '#d63447'
    },
    {
        label: 'The latest',
        iconName: 'movie-open',
        iconColor: defaultStyle.colors.secondary
    },
    {
        label: 'My account',
        iconName: 'account',
        iconColor: '#17b978'
    }
];
function Footer({ onPress }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={footerOptions}
                numColumns={3}
                renderItem={({ item }) => (
                    <View style={styles.optionsContainer}>
                        <TouchableOpacity onPress={() => onPress(item.label)}>
                            <Icon
                                color={defaultStyle.colors.white}
                                containerColor={item.iconColor}
                                iconContainer={styles.iconContainer}
                                name={item.iconName}
                                size={37}
                            />
                            <AppText style={styles.iconLabel}>
                                {item.label}
                            </AppText>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item) => item.label}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyle.colors.primary,
        bottom: 0,
        height: 80,
        position: 'absolute',
        width: '100%'
    },
    iconContainer: {
        alignItems: 'center',
        backgroundColor: defaultStyle.colors.white,
        borderRadius: 25,
        justifyContent: 'center',
        padding: 7
    },
    iconLabel: {
        fontSize: 10,
        marginTop: 5,
        textAlign: 'center'
    },
    optionsContainer: {
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 5,
        width: '33%'
    }
});
export default Footer;
