import React from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';

import Card from './Card';
import { height, width } from '../config/phoneDetails';

function MovieList({ movies, onPress }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={movies}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        <Card
                            onPress={onPress}
                            movie={item}
                            imageStyle={styles.image}
                            numberOfLines={1}
                        />
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    container: {
        paddingBottom: 15
    },
    image: {
        height: height / 3.5,
        resizeMode: 'stretch',
        width: width * 0.7
    }
});
export default MovieList;
