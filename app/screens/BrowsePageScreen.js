import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ToastAndroid } from 'react-native';
import Modal from 'react-native-modal';
import * as SecureStore from 'expo-secure-store';

import AppButton from './../components/AppButton';
import BrowserPageComponent from '../components/BrowserPageComponent';
import defaultStyles from './../config/styles';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Screen from '../components/Screen';
import Spinner from '../components/Spinner';
import UserRow from '../components/UserRow';
import { height } from '../config/phoneDetails';

const categories = [
    { name: 'Popular', property: 'popular' },
    { name: 'Now Playing', property: 'now_playing' },
    { name: 'Top Rated', property: 'top_rated' },
    { name: 'Upcoming', property: 'upcoming' },
    { name: 'Latest', property: 'latest' }
];

function BrowsePageScreen({ navigation }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [userRequest, setUserRequest] = useState({
        email: '',
        username: ''
    });
    useEffect(() => {
        retrieveData();
    }, []);

    async function retrieveData() {
        try {
            const [email, username] = await Promise.all([
                SecureStore.getItemAsync('email'),
                SecureStore.getItemAsync('username')
            ]);
            setUserRequest({
                email,
                username
            });
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
            console.log('user request', userRequest);
        }
    }
    function handlePressMovie(movie) {
        navigation.navigate('Details', {
            movie: movie
        });
    }
    function handleFooterOptionClick(label) {
        switch (label) {
            case 'My account':
                setIsVisible(true);
                break;

            default:
                break;
        }
    }
    async function handleLogout() {
        try {
            await SecureStore.deleteItemAsync('email');
            await SecureStore.deleteItemAsync('username');
            setIsVisible(false);
            navigation.push('Home');
        } catch (error) {
            ToastAndroid.showWithGravity(
                error.message.toString(),
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }
    }
    return (
        <Screen>
            {isLoading ? (
                <Spinner />
            ) : (
                <View style={styles.container}>
                    <View style={styles.moviesContainer}>
                        <Header title="Home" style={styles.title} />
                        <View style={styles.categoriesContainer}>
                            <FlatList
                                data={categories}
                                keyExtractor={(item) => item.name.toString()}
                                renderItem={({ item, index }) => (
                                    <View key={index}>
                                        <BrowserPageComponent
                                            category={item.property}
                                            onPress={handlePressMovie}
                                            title={item.name}
                                        />
                                    </View>
                                )}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                        <Modal visible={isVisible}>
                            <View style={styles.modalContainer}>
                                <UserRow
                                    email="mykolas@gmail.com"
                                    iconName="account"
                                />
                                <UserRow
                                    iconName="logout"
                                    label="Logout"
                                    onPress={handleLogout}
                                />
                                <View>
                                    <AppButton
                                        onPress={() => setIsVisible(false)}
                                        title="close"
                                    >
                                        Close
                                    </AppButton>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    <Footer onPress={handleFooterOptionClick} />
                </View>
            )}
        </Screen>
    );
}

const styles = StyleSheet.create({
    categoriesContainer: {
        paddingHorizontal: 10,
        paddingBottom: height * 0.25
    },
    container: {
        flex: 1
    },
    modalContainer: {
        width: '100%',
        padding: 10,
        backgroundColor: defaultStyles.colors.lightGrey,
        borderRadius: 10
    },
    moviesContainer: {
        paddingBottom: 50
    },
    title: {
        fontSize: 25
    }
});
export default BrowsePageScreen;
