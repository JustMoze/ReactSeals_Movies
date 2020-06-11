import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import AppText from '../components/AppText';
import defaultStyles from './../config/styles';
import Header from './../components/Header';
import HeaderNavigator from './../components/HeaderNavigator';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';
import VideoPlayer from '../components/VideoPlayer';
import { getVideos } from '../services/movieService';
import WebViewModal from '../components/WebViewModal';
import { YOUTUBE, YOUTUBE_QUERY, FUNNY_VIDEO } from 'react-native-dotenv';

function PlayerPageScreen({ route, navigation }) {
    const { movie } = route.params;
    const [showWebView, setShowWebView] = useState(false);
    const [gotTrailerUrl, setGotTrailerUrl] = useState(false);
    const [trailer, setTrailer] = useState('');

    useEffect(() => {
        async function getMovieVideos() {
            try {
                const { data: video } = await getVideos(movie.id);
                setGotTrailerUrl(true);
                setTrailer(getTrailerKey(video));
            } catch (error) {
                console.log(error);
            }
        }
        getMovieVideos();
    }, []);

    const movieUrl = () => {
        if (gotTrailerUrl && trailer !== '') {
            return trailer;
        } else {
            const { title } = movie;
            var query = title.split(' ');
            var url = `${YOUTUBE_QUERY}`;
            query.forEach((element) => {
                url += element + '+';
            });
            return url;
        }
    };
    function getTrailerKey(trailer) {
        var url = '';
        if (trailer) {
            url = `${YOUTUBE}${trailer.results[0].key}`;
        }
        return url;
    }
    return (
        <ScrollView>
            {showWebView && (
                <WebViewModal
                    uri={movieUrl()}
                    handleClose={() => setShowWebView(false)}
                    isVisible={showWebView}
                />
            )}
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
                <VideoPlayer uri={`${FUNNY_VIDEO}`} />
                <View style={styles.movieDetails}>
                    <AppText style={styles.descriptionLabel}>
                        Description:
                    </AppText>
                    <ListItemSeparator style={styles.separator} />
                    <AppText style={styles.description}>
                        {movie.description}
                    </AppText>
                    <ListItemSeparator
                        style={[styles.separator, { marginTop: 10 }]}
                    />
                    <View style={styles.youtubeButtonContainer}>
                        <TouchableOpacity
                            style={styles.youtubeButton}
                            onPress={() => setShowWebView(true)}
                        >
                            <Icon
                                name="youtube"
                                color={defaultStyles.colors.black}
                                size={45}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.lightGrey,
        borderRadius: 10,
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 20
    },
    description: {
        paddingHorizontal: 5,
        textAlign: 'justify'
    },
    descriptionLabel: {
        fontSize: 25,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    youtubeButton: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.red,
        borderRadius: 25,
        width: '25%'
    },
    youtubeButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
        width: '100%'
    },
    movieDetails: {
        backgroundColor: defaultStyles.colors.white,
        borderRadius: 10,
        marginBottom: 30,
        marginTop: 25,
        paddingHorizontal: 10,
        width: '100%'
    },
    separator: {
        backgroundColor: defaultStyles.colors.secondary,
        height: 2,
        marginBottom: 10
    }
});
export default PlayerPageScreen;
