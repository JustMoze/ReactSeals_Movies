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
        alignItems: 'center',
        borderRadius: 40,
        height: 50,
        justifyContent: 'center',
        marginVertical: 10,
        width: '100%'
    },
    buttonText: {
        color: defaultStyles.colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});

export default AppButton;
