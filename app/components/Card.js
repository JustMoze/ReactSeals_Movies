import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import AppText from './AppText';
import defaultStyles from './../config/styles';

function Card({ imageStyle, movie, onPress, ...rest }) {
    return (
        <TouchableOpacity onPress={() => onPress(movie)}>
            <View style={styles.container}>
                <Image
                    source={
                        isNaN(movie.image) && movie.image !== null
                            ? { uri: movie.image }
                            : require('../assets/movie.jpg')
                    }
                    style={imageStyle}
                />
                <View style={styles.movieTitle}>
                    <AppText style={styles.imageTitle} {...rest}>
                        {movie.title}
                    </AppText>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        flexDirection: 'column',
        overflow: 'hidden',
        width: '100%'
    },
    imageTitle: {
        color: defaultStyles.colors.dark,
        flex: 1,
        flexShrink: 1,
        flexWrap: 'wrap',
        fontSize: 15
    },
    movieTitle: {
        backgroundColor: defaultStyles.colors.lightGrey,
        flexDirection: 'row',
        padding: 10,
        width: '100%'
    }
});
export default Card;
