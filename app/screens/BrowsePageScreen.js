import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import CategoryTitle from '../components/CategoryTitle';
import data from '../services/data';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MovieList from '../components/MovieList';
import Screen from '../components/Screen';

const categories = [
    { name: 'Action' },
    { name: 'Comedy' },
    { name: 'Romantic' },
    { name: 'Horror' },
    { name: 'Fantasy' }
];

function BrowsePageScreen({ navigation }) {
    function handlePressMovie(movie) {
        navigation.navigate('Details', {
            movie: movie
        });
    }
    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.moviesContainer}>
                    <Header title="Home" style={styles.title} />
                    <View style={styles.categoriesContainer}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={categories}
                            keyExtractor={(item) => item.name.toString()}
                            renderItem={({ item, index }) => (
                                <View key={index}>
                                    <CategoryTitle title={item.name} />
                                    <MovieList
                                        movies={data}
                                        onPress={handlePressMovie}
                                    />
                                </View>
                            )}
                        />
                    </View>
                </View>
                <Footer />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    categoriesContainer: {
        paddingHorizontal: 10
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
