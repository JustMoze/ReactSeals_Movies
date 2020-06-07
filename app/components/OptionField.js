import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import AppText from './AppText';

function OptionField({ containerStyle, onPress, textStyle, title }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={containerStyle}>
                <AppText style={textStyle}>{title}</AppText>
            </View>
        </TouchableOpacity>
    );
}
export default OptionField;
