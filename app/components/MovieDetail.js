import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    ScrollView,
    Dimensions
} from 'react-native';

import AppText from './AppText';
var { height } = Dimensions.get('window');
function MovieDetail({ ...rest }) {
    return (
        <View style={styles.mainContainer}>
            <ScrollView
                style={styles.mainContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/darkKnight.jpg')}
                    />
                </View>
                <View style={styles.descriptionContainer}>
                    <AppText style={styles.movieLabel}>Movie Details</AppText>
                    <AppText>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures, to generate Lorem
                        Ipsum which looks reasonable. The generated Lorem Ipsum
                        is therefore always free from repetition, injected
                        humour, or non-characteristic words etc.
                    </AppText>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    size: {
        height: height / 2
    },
    descriptionContainer: {},
    image: {
        borderRadius: 10,
        resizeMode: 'contain',
        width: '100%',
        height: height / 3
    },
    imageContainer: {
        paddingVertical: 10
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 5
    },
    movieLabel: {
        paddingBottom: 10,
        fontSize: 25,
        fontWeight: '800'
    }
});
export default MovieDetail;
