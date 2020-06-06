import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default function Spinner() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={70} color="#0000ff" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});
