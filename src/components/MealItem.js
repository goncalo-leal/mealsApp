import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ImageBackground
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

const MealItem = (props) => {
    const image = { uri: props.meal.imageUrl };
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal} style={styles.meal}>
                <View style={styles.mealHeader}>
                    <ImageBackground source={image} resizeMode="cover" style={styles.mealImage}>
                        <Text style={styles.mealTitle}>{props.title}</Text>
                    </ImageBackground>
                </View>
                <View style={{...styles.mealRow, ...styles.mealDetails}}>
                    <View style={styles.mealDetailsItem}>
                        <FontAwesome name="clock-o" size={24} color="black" />
                        <Text style={styles.mealInfo}> {props.meal.duration}</Text>
                    </View>
                    <View style={styles.mealDetailsItem}>
                        <FontAwesome name="puzzle-piece" size={24} color="black" />
                        <Text style={styles.mealInfo}> {props.meal.complexity}</Text>
                    </View>
                    <View style={styles.mealDetailsItem}>
                        <FontAwesome name="dollar" size={24} color="black" />
                        <Text style={styles.mealInfo}> {props.meal.affordability}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        flex: 1,
        height: 200,
        width: '95%',
        borderWidth: 1,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    meal: {
        flex: 1,
        width: '100%',
    },
    mealRow: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
    },
    mealHeader: {
        width: '100%',
        height: '75%',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mealImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mealDetails: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '25%',
    },
    mealDetailsItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 5,
    },
    mealTitle: {
        fontFamily: 'Oswald-bold',
        fontSize: 22,
        padding: 5,
        backgroundColor: 'rgba(255,255,255,0.4)',
    },
    mealInfo: {
        fontFamily: 'Oswald',
        fontSize: 18,
    },
});

export default MealItem;