import React from 'react';
import { StyleSheet } from 'react-native';

import CategoryTitle from '../components/CategoryTitle';
import defaultStyles from '../config/styles';
import Header from '../components/Header';
import HeaderNavigator from '../components/HeaderNavigator';
import MovieDetail from '../components/MovieDetail';
import movies from '../services/data';
import OptionsList from '../components/OptionsList';
import MovieList from '../components/MovieList';

function DetailsPageScreen() {
    const handlePressBack = () => {};
    const configureTitle = () => {
        var slicedTitle = '';
        if (movies[0].title.length > 20) {
            slicedTitle = movies[0].title.slice(0, 17) + '...';
        }
        if (slicedTitle) {
            return slicedTitle;
        } else return movies[0].title;
    };
    const renderMovieDetails = () => {
        return <MovieDetail movie={movies[0]} numberOfLines={3} />;
    };
    const renderFooter = () => {
        return (
            <>
                <CategoryTitle
                    title="Related movies: "
                    style={styles.footerTitle}
                />
                <MovieList movies={movies} />
            </>
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
                        style={styles.navigator}
                    />
                }
                NavigatorRight={
                    <HeaderNavigator
                        actionName="Edit"
                        style={styles.navigator}
                    />
                }
                style={styles.titleStile}
                title={configureTitle()}
            />
            <OptionsList
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
    },
    titleStile: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 25
    }
});
export default DetailsPageScreen;
