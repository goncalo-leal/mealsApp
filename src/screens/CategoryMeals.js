import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMeal = (props) => {
    const { categoryId } = props.route.params;
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(categoryId) >= 0
    );

    return (
        <View style={styles.screen} >
            <MealList data={displayedMeals} onSelectMeal={(id, title, isFav) => {
                props.navigation.navigate(
                    'Meal Details',
                    {
                        mealId: id,
                        name: title,
                        isFav: false,
                    }
                );
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});

export default CategoryMeal;