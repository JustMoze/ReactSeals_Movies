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
    const [isVisibleRomantic, setIsVisibleRomantic] = useState(false);
    const [isInverted, setIsInverted] = useState(false);
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
        }
    }
    function handlePressMovie(movie) {
        setIsVisibleRomantic(false);
        navigation.navigate('Details', {
            movie: movie
        });
    }
    function handleFooterOptionClick(label) {
        const { email } = userRequest;
        switch (label) {
            case 'My account':
                if (email !== '') {
                    setIsVisible(true);
                } else {
                    navigation.push('Login');
                }
                break;
            case 'The latest':
                setIsInverted(!isInverted);
                break;
            case 'Romantic':
                setIsVisibleRomantic(true);
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
    const { email, username } = userRequest;
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
                                inverted={isInverted}
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
                                <UserRow email={email} iconName="account" />
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
                        <Modal
                            visible={isVisibleRomantic}
                            style={styles.MoviesModal}
                        >
                            <View
                                style={[
                                    styles.modalContainer,
                                    {
                                        backgroundColor:
                                            defaultStyles.colors.white
                                    }
                                ]}
                            >
                                <BrowserPageComponent
                                    romatic={true}
                                    onPress={handlePressMovie}
                                    title="Romatic movies"
                                />
                                <View style={styles.closeButton}>
                                    <AppButton
                                        onPress={() =>
                                            setIsVisibleRomantic(false)
                                        }
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
    closeButton: {
        alignSelf: 'center',
        width: '80%'
    },
    container: {
        flex: 1
    },
    modalContainer: {
        backgroundColor: defaultStyles.colors.lightGrey,
        borderRadius: 10,
        padding: 10,
        width: '100%'
    },
    moviesContainer: {
        paddingBottom: 50
    },
    MoviesListModal: {
        height: height / 2.5
    },
    title: {
        fontSize: 25
    }
});
export default BrowsePageScreen;
