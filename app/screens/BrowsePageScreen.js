import React from 'react';
import { StyleSheet } from 'react-native';

import defaultStyles from '../config/styles';
import Header from '../components/Header';
import HeaderNavigator from './../components/HeaderNavigator';
import Screen from '../components/Screen';
import MovieDetail from '../components/MovieDetail';

function BrowsePageScreen({ title = 'Title' }) {
    const handlePressBack = () => {};
    return (
        <Screen>
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
            >
                {title}
            </Header>
            <MovieDetail />
        </Screen>
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
        fontSize: 30
    }
});
export default BrowsePageScreen;
