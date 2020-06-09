import React, { useState } from 'react';
import { Image, View, StyleSheet, ToastAndroid } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import * as Crypto from 'expo-crypto';

import defaultStyles from './../config/styles';
import Header from './../components/Header';
import HeaderNavigator from './../components/HeaderNavigator';
import MovieForm from '../components/forms/MovieForm';
import Movie_DB from '../services/firebase';
import validationSchema from './../config/validationSchema';
import { sliceEmail } from './../config/calculations';

function LoginPageScreen({ navigation }) {
    const onSubmitLogin = (values) => {
        try {
            const { email, password } = values;
            const path = sliceEmail(email);
            Movie_DB.database()
                .ref(`users/${path}`)
                .on('value', function (snapshot) {
                    async function authenticate(password) {
                        try {
                            var user = snapshot.val();
                            if (user) {
                                var key = Object.keys(user);
                                const {
                                    hashed_password,
                                    username,
                                    email
                                } = user[key];
                                const rehashed_password = await Crypto.digestStringAsync(
                                    Crypto.CryptoDigestAlgorithm.SHA256,
                                    password
                                );
                                if (
                                    hashed_password &&
                                    hashed_password === rehashed_password
                                ) {
                                    await SecureStore.setItemAsync(
                                        'email',
                                        email
                                    );
                                    await SecureStore.setItemAsync(
                                        'username',
                                        username
                                    );
                                    navigation.navigate('Browse');
                                } else {
                                    throw TypeError('Password is Incorrect!');
                                }
                            } else throw TypeError('Email address is incorrect!');
                        } catch (error) {
                            ToastAndroid.showWithGravity(
                                error.message.toString(),
                                ToastAndroid.SHORT,
                                ToastAndroid.CENTER
                            );
                        }
                    }
                    authenticate(password);
                });
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
                title="Login"
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
                    onSubmit={(values) => onSubmitLogin(values)}
                    text="Don't have an account? Sign up here"
                    onPressLink={() => navigation.push('Register')}
                    title="Login"
                    validationSchema={validationSchema}
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
export default LoginPageScreen;
