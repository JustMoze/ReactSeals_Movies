import React from 'react';
import { View, StyleSheet } from 'react-native';

import defaultStyles from './../config/styles';
import Header from './../components/Header';
import HeaderNavigator from './../components/HeaderNavigator';
import VideoPlayer from '../components/VideoPlayer';

function PlayerPageScreen({ route, navigation }) {
    const { movie } = route.params;
    return (
        <>
            <Header
                title={movie.title}
                style={styles.title}
                NavigatorLeft={
                    <HeaderNavigator
                        onPress={() => navigation.goBack()}
                        actionName="Back"
                        color={defaultStyles.colors.primary}
                        name="chevron-left"
                    />
                }
            />
            <View style={styles.container}>
                <VideoPlayer uri="http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" />
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
