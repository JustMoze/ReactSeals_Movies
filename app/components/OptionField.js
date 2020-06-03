import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import AppText from './AppText';

function OptionField({ onPress, containerStyle, textStyle, title }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={containerStyle}>
                <AppText style={textStyle}>{title}</AppText>
            </View>
        </TouchableOpacity>
    );
}
export default OptionField;
