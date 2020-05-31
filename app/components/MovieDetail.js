import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import AppText from './AppText';

function MovieDetail({ ...rest }) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/lor3.jpg')}
                    style={styles.image}
                />
            </View>
            <View style={styles.secondaryContainer}>
                <AppText style={styles.detailsLabel}>Movie Details</AppText>
                <AppText style={styles.description}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    description: {
        marginVertical: 30
    },
    detailsLabel: {
        fontSize: 25
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    imageContainer: {
        marginVertical: 17,
        flex: 1
    },
    mainContainer: {
        flex: 2,
        paddingHorizontal: 20
    },
    secondaryContainer: {
        flex: 1
    }
});
export default MovieDetail;
