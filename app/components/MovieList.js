import React from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';

import Card from './Card';
var { height, width } = Dimensions.get('window');

function MovieList({ movies }) {
    const handleCardPress = (title) => {
        console.log(title, 'movie was clicked');
    };
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={movies}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        <Card
                            onPress={handleCardPress}
                            movie={item}
                            imageStyle={styles.image}
                            numberOfLines={1}
                        />
                    </View>
                )}
                keyExtractor={(item) => item.id}
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
        paddingBottom: 30
    },
    image: {
        height: height / 3.5,
        resizeMode: 'stretch',
        width: width * 0.7
    }
});
export default MovieList;
