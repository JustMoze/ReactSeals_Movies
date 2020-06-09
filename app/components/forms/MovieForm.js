import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Form, FormField, SubmitButton } from './index';
import Link from '../Link';

function MovieForm({
    initialValues,
    onSubmit,
    text = null,
    onPressLink,
    validationSchema,
    title
}) {
    return (
        <View style={styles.formContainer}>
            <Form
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {title === 'Register' && (
                    <FormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="account"
                        keyboardType="default"
                        name="username"
                        placeholder="Username"
                        textContentType="password"
                    />
                )}
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />

                {text && <Link text={text} onPress={onPressLink} />}
                <SubmitButton title={title} color="secondary" />
            </Form>
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        paddingHorizontal: 15
    }
});
export default MovieForm;
