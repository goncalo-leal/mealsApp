import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';

import MealItem from './MealItem';

const MealList = (props) => {
    const renderMealItem = (itemData) => {
        return (
            <View style={styles.mealContainer}>
                <MealItem
                    title={itemData.item.title}
                    onSelectMeal={() => {
                        props.onSelectMeal(itemData.item.id, itemData.item.title, false);
                    }}
                    meal={itemData.item}
                />
            </View>
        );
    }

    return (
        <FlatList
            data={props.data}
            keyExtractor={(item, index) => item.id}
            renderItem={renderMealItem}
        />
    );
};

const styles = StyleSheet.create({
    mealContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
});

export default MealList;