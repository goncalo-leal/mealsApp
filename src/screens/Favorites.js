import React from 'react';
import {
    View, Text, StyleSheet, Button,
} from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const Favorites = (props) => {
    return (
        <View style={styles.screen} >
            <View style={styles.listContainer} >
                <MealList
                    data={MEALS}
                    onSelectMeal={(id, title, isFav) => {
                        props.navigation.navigate(
                            'Favorite Details',
                            {
                                mealId: id,
                                name: title,
                                isFav: true,
                            }
                        );
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Favorites;