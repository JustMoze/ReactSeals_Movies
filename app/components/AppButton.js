import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import defaultStyles from '../config/styles';

function AppButton({ children, color, onPress, width = '100%', ...rest }) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color }, { width }]}
            onPress={onPress}
        >
            <Text style={styles.buttonText} {...rest}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        alignItems: 'center',
        height: 50,
        justifyContent: 'center',
        borderRadius: 40,
        marginVertical: 10
    },
    buttonText: {
        fontSize: 20,
        color: defaultStyles.colors.white,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
});

export default AppButton;
