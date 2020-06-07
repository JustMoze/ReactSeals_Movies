import React from 'react';
import { StyleSheet } from 'react-native';

import defaultStyles from '../config/styles';
import Header from '../components/Header';
import HeaderNavigator from '../components/HeaderNavigator';
import MovieDetail from '../components/MovieDetail';
import OptionsList from '../components/OptionsList';
import BrowserPageComponent from '../components/BrowserPageComponent';

function DetailsPageScreen({ route, navigation }) {
    const { movie } = route.params;
    const renderMovieDetails = () => {
        return <MovieDetail movie={movie} numberOfLines={3} />;
    };
    function handlePressMovie(movie) {
        navigation.navigate('Details', {
            movie: movie
        });
    }
    const renderFooter = () => {
        return (
            <>
                <BrowserPageComponent
                    realted={true}
                    movieId={movie.id}
                    onPress={handlePressMovie}
                    title="Related Movies"
                    style={styles.footerTitle}
                />
            </>
        );
    };
    return (
        <>
            <Header
                NavigatorLeft={
                    <HeaderNavigator
                        onPress={() => navigation.goBack()}
                        actionName="Back"
                        color={defaultStyles.colors.primary}
                        name="chevron-left"
                        style={styles.navigator}
                    />
                }
                NavigatorRight={
                    <HeaderNavigator
                        actionName="Edit"
                        style={styles.navigator}
                    />
                }
                title={movie.title}
            />
            <OptionsList
                onPressPlay={() => {
                    navigation.navigate('Player', {
                        movie: movie
                    });
                }}
                Header={renderMovieDetails}
                Footer={renderFooter}
                separatorAbove={true}
            />
        </>
    );
}

const styles = StyleSheet.create({
    footerTitle: {
        padding: 10
    },
    navigator: {
        color: defaultStyles.colors.primary
    },
    scrollViewContainer: {
        width: '100%'
    }
});
export default DetailsPageScreen;
