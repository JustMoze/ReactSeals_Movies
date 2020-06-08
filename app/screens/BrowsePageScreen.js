import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import BrowserPageComponent from '../components/BrowserPageComponent';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Screen from '../components/Screen';
import Spinner from '../components/Spinner';
import { height } from '../config/phoneDetails';

const categories = [
    { name: 'Popular', property: 'popular' },
    { name: 'Now Playing', property: 'now_playing' },
    { name: 'Top Rated', property: 'top_rated' },
    { name: 'Upcoming', property: 'upcoming' },
    { name: 'Latest', property: 'latest' }
];

function BrowsePageScreen({ navigation }) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        function loadMovies() {
            setTimeout(function () {
                setIsLoading(false);
            }, 2000);
        }
        loadMovies();
    }, [isLoading]);
    function handlePressMovie(movie) {
        navigation.navigate('Details', {
            movie: movie
        });
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
                    </View>
                    <Footer />
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
    moviesContainer: {
        paddingBottom: 50
    },
    title: {
        fontSize: 25
    }
});
export default BrowsePageScreen;
