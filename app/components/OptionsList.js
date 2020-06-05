import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import defaultStyles from '../config/styles';
import OptionField from './OptionField';
import ListItemSeparator from './ListItemSeparator';

const data = [
    {
        id: 1,
        title: 'Play movie'
    },
    {
        id: 2,
        title: 'Add to Library'
    }
];

function OptionsList({
    Header,
    Footer,
    onPressAdd,
    onPressPlay,
    separatorAbove
}) {
    function renderSeparator() {
        return <ListItemSeparator style={styles.separator} />;
    }
    return (
        <>
            <FlatList
                ListHeaderComponent={Header ? Header : null}
                ListFooterComponent={Footer ? Footer : null}
                data={data}
                keyExtractor={(item) => item.title}
                renderItem={({ item, index }) => (
                    <>
                        {separatorAbove && index == 0 && (
                            <ListItemSeparator style={styles.separator} />
                        )}
                        <View style={styles.itemsContainer}>
                            <OptionField
                                title={item.title}
                                onPress={
                                    item.title === 'Play movie'
                                        ? onPressPlay
                                        : onPressAdd
                                }
                                textStyle={styles.optionsTitle}
                                containerStyle={styles.optionsContainer}
                            />
                        </View>
                    </>
                )}
                contentContainerStyle={{
                    flexGrow: 1
                }}
                ItemSeparatorComponent={renderSeparator}
            />
        </>
    );
}

const styles = StyleSheet.create({
    itemsContainer: {
        paddingLeft: 15,
        width: '50%'
    },
    optionsContainer: {
        alignItems: 'center',
        height: 50,
        justifyContent: 'center'
    },
    optionsTitle: {
        color: defaultStyles.colors.lightBlue,
        fontSize: 20
    },
    separator: {
        backgroundColor: defaultStyles.colors.primary,
        height: 1,
        marginLeft: 15,
        width: '50%'
    }
});
export default OptionsList;
