import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import defaultStyles from './../config/styles';
import Header from './../components/Header';
import HeaderNavigator from './../components/HeaderNavigator';
import VideoPlayer from '../components/VideoPlayer';
import { getVideos } from '../services/movieService';

function PlayerPageScreen({ route, navigation }) {
    const { movie } = route.params;
    const [trailer, setTrailer] = useState();
    useEffect(() => {
        async function getMovieVideos() {
            try {
                const { data: trailer } = await getVideos(movie.id);
                console.log('trailer - ', trailer);
                setTrailer(trailer);
            } catch (error) {
                console.log(error);
            }
        }
        getMovieVideos();
        console.log('current trailer data', trailer);
    }, []);
    console.log('current movie', movie);
    return (
        <>
            <Header
                NavigatorLeft={
                    <HeaderNavigator
                        actionName="Back"
                        color={defaultStyles.colors.primary}
                        name="chevron-left"
                        onPress={() => navigation.goBack()}
                    />
                }
                title={movie.title}
            />
            <View style={styles.container}>
                <VideoPlayer uri="https://www.youtube.com/watch?v=P6AaSMfXHbA" />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 20
    }
});
export default PlayerPageScreen;
