import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Icon({ name, size = 25, color = '#fff' }) {
    return <MaterialCommunityIcons name={name} color={color} size={size} />;
}

export default Icon;
