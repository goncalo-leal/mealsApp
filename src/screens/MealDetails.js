import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Button,
    Image,
    SafeAreaView,
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import { MEALS } from '../data/dummy-data';
import DeafultText from '../components/DefaultText';

const MealDetails = (props) => {
    const { mealId } = props.route.params;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <ScrollView>
            <SafeAreaView style={styles.screen} >
                <Image
                    source={{uri: selectedMeal.imageUrl}}
                    style={styles.image}
                    resizeMode='cover'
                />

                <View style={styles.row}>
                    <View style={styles.rowItem}>
                        <FontAwesome name="clock-o" size={24} color="black" />
                        <DeafultText size={16}> {selectedMeal.duration}</DeafultText>
                    </View>
                    <View style={styles.rowItem}>
                        <FontAwesome name="puzzle-piece" size={24} color="black" />
                        <DeafultText size={16}> {selectedMeal.complexity.toUpperCase()}</DeafultText>
                    </View>
                    <View style={styles.rowItem}>
                        <FontAwesome name="dollar" size={24} color="black" />
                        <DeafultText size={16}> {selectedMeal.affordability.toUpperCase()}</DeafultText>
                    </View>
                </View>

                <View style={styles.details}>
                    <DeafultText size={35}>Ingredients</DeafultText>
                    {selectedMeal.ingredients.map(ingredient => {
                        return <DeafultText key={Math.random()} size={18}>{ingredient}</DeafultText>;
                    })}
                
                    <DeafultText size={35}>Steps</DeafultText>
                    {selectedMeal.steps.map(step => {
                        return <DeafultText key={Math.random()} size={18}>{step}</DeafultText>;
                    })}
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 200,
    },
    row: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
    },
    rowItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    details: {
        borderTopColor: '#333',
        borderTopWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MealDetails;