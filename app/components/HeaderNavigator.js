import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import AppText from './AppText';
import Icon from './Icon';

function HeaderNavigator({ actionName, name, onPress, ...rest }) {
    console.log('icon name', name);
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {name && <Icon name={name} {...rest} />}
            <AppText {...rest}>{actionName}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});
export default HeaderNavigator;
