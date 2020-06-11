import React from 'react';
import { StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

import defaultStyles from './../config/styles';
import Icon from './Icon';

function WebViewModal({ isVisible, uri, handleClose }) {
    return (
        <Modal visible={isVisible} style={styles.container}>
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                <Icon
                    name="window-close"
                    size={30}
                    color={defaultStyles.colors.black}
                />
            </TouchableOpacity>
            <WebView source={{ uri: uri }} />
        </Modal>
    );
}

const styles = StyleSheet.create({
    closeButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingVertical: 5,
        paddingRight: 10
    },
    container: {}
});
export default WebViewModal;
