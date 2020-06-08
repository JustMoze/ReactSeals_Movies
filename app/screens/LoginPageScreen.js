import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AppForm from '../components/forms/Form';
import AppFormField from './../components/forms/FormField';
import defaultStyles from './../config/styles';
import Header from './../components/Header';
import SubmitButton from '../components/forms/SubmitButton';
import HeaderNavigator from './../components/HeaderNavigator';

const validationSchema = Yup.object().shape({
    username: Yup.string().required().min(4).label('Username'),
    password: Yup.string().required().min(4).label('Password')
});

function LoginPageScreen({ navigation }) {
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
                <View style={styles.formContainer}>
                    <AppForm
                        initialValues={{ username: '', password: '' }}
                        onSubmit={(values) => console.log(values)}
                        validationSchema={validationSchema}
                    >
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="account"
                            keyboardType="email-address"
                            name="username"
                            placeholder="Username"
                            textContentType="emailAddress"
                        />
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            name="password"
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                        />
                        <SubmitButton title="Login" color="secondary" />
                    </AppForm>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
    formContainer: {
        paddingHorizontal: 15
    },
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
