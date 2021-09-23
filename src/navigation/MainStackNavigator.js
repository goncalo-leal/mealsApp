import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/Categories';
import CategoryMealsScreen from '../screens/CategoryMeals';
import MealDetailScreen from '../screens/MealDetails';

import HeaderBtn from '../components/HeaderBtn';
import DrawerBtn from '../components/DrawerBtn';
import ScreenTitle from '../components/ScreenTitle';

import Colors from '../constants/Colors';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.primaryColor,
                },
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontFamily: 'Oswald-bold',
                },
            }}
        >
            <Stack.Screen
                name="Categories"
                component={CategoriesScreen}
                options={({ navigation }) => ({
                    headerTitle: props => <ScreenTitle title="Meal Categories" />,
                    title: 'Meal Categories',
                    headerLeft: () => (
                        <DrawerBtn navigation={navigation} />
                    ),
                })}
            />
            <Stack.Screen
                name="Meals"
                component={CategoryMealsScreen}
                options={({ route }) => ({
                    headerTitle: props => <ScreenTitle title={route.params.name} />,
                    title: route.params.name,
                })} 
            />
            <Stack.Screen
                name="Meal Details"
                component={MealDetailScreen}
                options={({ route }) => ({
                    headerTitle: props => <ScreenTitle title={route.params.name.length > 25 ? route.params.name.substring(0, 25) + '...' : route.params.name} />,
                    title: route.params.name.length > 25 ? route.params.name.substring(0, 25) + '...' : route.params.name,
                    headerRight: () => (
                        <HeaderBtn isFav={route.params.isFav} />
                    ),
                })} 
            />
        </Stack.Navigator>
    );
}

export default MainStackNavigator;