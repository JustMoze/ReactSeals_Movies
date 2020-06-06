import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

import AppText from './AppText';

var { height } = Dimensions.get('window');

function MovieDetail({ movie, ...rest }) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={movie.image} />
            </View>
            <View style={styles.descriptionContainer}>
                <AppText style={styles.movieLabel}>Movie Details</AppText>
                <AppText {...rest}>{movie.description}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    descriptionContainer: {
        paddingBottom: 25,
        paddingRight: 20
    },
    image: {
        borderRadius: 5,
        resizeMode: 'stretch',
        width: '100%',
        height: height / 3
    },
    imageContainer: {
        paddingVertical: 10
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 10
    },
    movieLabel: {
        paddingTop: 5,
        paddingBottom: 20,
        fontSize: 25,
        fontWeight: '800'
    },
    optionsContainer: {
        paddingTop: 20,
        width: '50%'
    }
});
export default MovieDetail;
