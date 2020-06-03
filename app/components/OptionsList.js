import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

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

function OptionsList({ onPress, separatorAbove }) {
    function renderSeparator() {
        return <ListItemSeparator style={styles.separator} />;
    }
    return (
        <>
            {separatorAbove && <ListItemSeparator style={styles.separator} />}
            <FlatList
                data={data}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <OptionField
                        title={item.title}
                        onPress={onPress}
                        textStyle={styles.optionsTitle}
                        containerStyle={styles.optionsContainer}
                    />
                )}
                ItemSeparatorComponent={renderSeparator}
            />
        </>
    );
}

const styles = StyleSheet.create({
    optionsContainer: {
        alignItems: 'center',
        height: 50,
        justifyContent: 'center'
    },
    separator: {
        height: 1,
        backgroundColor: defaultStyles.colors.primary
    },
    optionsTitle: {
        color: defaultStyles.colors.lightBlue,
        fontSize: 20
    }
});
export default OptionsList;
