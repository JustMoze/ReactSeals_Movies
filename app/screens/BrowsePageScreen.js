import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import CategoryTitle from '../components/CategoryTitle';
import data from '../services/data';
import Header from '../components/Header';
import MovieList from '../components/MovieList';

const categories = [
    { name: 'Action' },
    { name: 'Comedy' },
    { name: 'Romantic' },
    { name: 'Horror' },
    { name: 'Fantasy' }
];

function BrowsePageScreen(props) {
    return (
        <View style={styles.container}>
            <Header title="Home" style={styles.title} />
            <View style={styles.moviesContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={categories}
                    keyExtractor={(item) => item.name.toString()}
                    renderItem={({ item, index }) => (
                        <View key={index}>
                            <CategoryTitle title={item.name} />
                            <MovieList movies={data} />
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 50
    },
    moviesContainer: {
        paddingHorizontal: 10
    },
    title: {
        fontSize: 25
    }
});
export default BrowsePageScreen;
