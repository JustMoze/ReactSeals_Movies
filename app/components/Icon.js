import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';

function Icon({
    color = '#fff',
    containerColor,
    iconContainer,
    name,
    size = 25
}) {
    return (
        <View style={[iconContainer, { backgroundColor: containerColor }]}>
            <MaterialCommunityIcons name={name} color={color} size={size} />
        </View>
    );
}

export default Icon;
