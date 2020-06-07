import React from 'react';
import { StyleSheet } from 'react-native';

import BrowserPageComponent from '../components/BrowserPageComponent';
import defaultStyles from '../config/styles';
import Header from '../components/Header';
import HeaderNavigator from '../components/HeaderNavigator';
import MovieDetail from '../components/MovieDetail';
import OptionsList from '../components/OptionsList';

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
            <BrowserPageComponent
                movieId={movie.id}
                onPress={handlePressMovie}
                realted={true}
                style={styles.footerTitle}
                title="Related Movies"
            />
        );
    };
    return (
        <>
            <Header
                NavigatorLeft={
                    <HeaderNavigator
                        actionName="Back"
                        color={defaultStyles.colors.primary}
                        name="chevron-left"
                        onPress={() => navigation.goBack()}
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
                Footer={renderFooter}
                Header={renderMovieDetails}
                onPressPlay={() => {
                    navigation.navigate('Player', {
                        movie: movie
                    });
                }}
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
