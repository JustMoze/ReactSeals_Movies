import React from 'react';
import { Image, View, StyleSheet, ToastAndroid } from 'react-native';
import * as Crypto from 'expo-crypto';

import defaultStyles from '../config/styles';
import Header from '../components/Header';
import HeaderNavigator from './../components/HeaderNavigator';
import MovieForm from '../components/forms/MovieForm';
import Movie_DB from '../services/firebase';
import { registrationValidation } from './../config/validationSchema';
import { sliceEmail } from './../config/calculations';

function RegisterPageScreen({ navigation }) {
    const onRegisterSubmit = (values) => {
        try {
            const { email, password, username } = values;
            const path = sliceEmail(email);
            async function hashPassword(password) {
                const hashed_password = await Crypto.digestStringAsync(
                    Crypto.CryptoDigestAlgorithm.SHA256,
                    password
                );
                Movie_DB.database()
                    .ref(`users/${path}`)
                    .push({
                        username,
                        email,
                        hashed_password
                    })
                    .then(() => {
                        navigation.navigate('Login', {
                            fromLogin: true
                        });
                    })
                    .catch((error) => {
                        console.log('error ', error);
                    });
            }
            hashPassword(password);
        } catch (error) {
            ToastAndroid.showWithGravity(
                error.toString(),
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }
    };
    return (
        <>
            <Header
                title="Register"
                NavigatorLeft={
                    <HeaderNavigator
                        actionName="Back"
                        color={defaultStyles.colors.primary}
                        name="chevron-left"
                        onPress={() => navigation.goBack()}
                        style={styles.navigator}
                    />
                }
            />
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/logo.png')}
                        style={styles.logo}
                    />
                </View>
                <MovieForm
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => onRegisterSubmit(values)}
                    title="Register"
                    validationSchema={registrationValidation}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: defaultStyles.colors.primary,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%'
    },
    logo: {
        height: 120,
        resizeMode: 'contain',
        width: '100%'
    }
});
export default RegisterPageScreen;
