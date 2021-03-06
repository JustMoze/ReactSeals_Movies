import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import AppText from './AppText';
import Icon from './Icon';

function HeaderNavigator({ actionName, name, onPress, ...rest }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {name && <Icon name={name} {...rest} />}
            <AppText {...rest}>{actionName}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row'
    }
});
export default HeaderNavigator;
