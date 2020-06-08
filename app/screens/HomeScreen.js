import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import defaultStyles from '../config/styles';
import Screen from '../components/Screen';

function HomeScreen({ navigation }) {
    return (
        <Screen style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.labelContainer}>
                <AppText style={styles.label}>ReactSeals presents</AppText>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton
                    color={defaultStyles.colors.secondary}
                    onPress={() => navigation.push('Browse')}
                    width="70%"
                >
                    Browse
                </AppButton>
                <AppButton
                    color={defaultStyles.colors.secondary}
                    onPress={() => navigation.push('Login')}
                    width="70%"
                >
                    Login
                </AppButton>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    buttonsContainer: {
        alignItems: 'center',
        flex: 2,
        width: '100%'
    },
    container: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.primary
    },
    imageContainer: {
        marginBottom: 30,
        marginTop: 50,
        paddingHorizontal: 10,
        width: '100%'
    },
    label: {
        color: defaultStyles.colors.black,
        fontSize: 30
    },
    labelContainer: {
        alignItems: 'center',
        flex: 1,
        width: '100%'
    },
    logo: {
        height: 120,
        resizeMode: 'contain',
        width: '100%'
    }
});
export default HomeScreen;
