import React from 'react';
import { YellowBox } from 'react-native';
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    View,
    SafeAreaView
} from 'react-native';

import AppText from './AppText';
import CategoryTitle from './CategoryTitle';
import OptionsList from './OptionsList';

YellowBox.ignoreWarnings(['Remote debugger']);
var { height } = Dimensions.get('window');

function MovieDetail({ movie, ...rest }) {
    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={movie.image} />
                </View>
                <View style={styles.descriptionContainer}>
                    <AppText style={styles.movieLabel}>Movie Details</AppText>
                    <AppText {...rest}>{movie.description}</AppText>
                </View>
                <SafeAreaView>
                    <View style={styles.optionsContainer}>
                        <OptionsList separatorAbove={true} />
                    </View>
                </SafeAreaView>
                <CategoryTitle title="Related movies: " />
                <AppText {...rest}>{movie.description}</AppText>
                <AppText {...rest}>{movie.description}</AppText>
            </View>
        </ScrollView>
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
    },
    size: {
        height: height / 2
    }
});
export default MovieDetail;
