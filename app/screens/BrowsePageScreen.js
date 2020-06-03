import React from 'react';
import { StyleSheet } from 'react-native';

import defaultStyles from '../config/styles';
import Header from '../components/Header';
import HeaderNavigator from './../components/HeaderNavigator';
import MovieDetail from '../components/MovieDetail';
import movies from './../services/data';

function BrowsePageScreen() {
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

            <MovieDetail movie={movies[0]} numberOfLines={3} />
        </>
    );
}

const styles = StyleSheet.create({
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
export default BrowsePageScreen;
