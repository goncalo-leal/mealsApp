import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Favorites from '../screens/Favorites';
import MealDetailScreen from '../screens/MealDetails';

import HeaderBtn from '../components/HeaderBtn';
import ScreenTitle from '../components/ScreenTitle';
import DrawerBtn from '../components/DrawerBtn';

import Colors from '../constants/Colors';

const Stack = createNativeStackNavigator();

const FavoritesStackNavigator = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.accentColor,
                },
                headerTintColor: 'white',
                headerTitleAlign: 'center'
            }}
        >
            <Stack.Screen
                name="Favorites"
                component={Favorites}
                options={({ navigation, route }) => ({
                    headerTitle: props => <ScreenTitle title="Your Favorites" />,
                    title: 'Your Favorites',
                    headerLeft: () => (
                        <DrawerBtn navigation={navigation} />
                    ),
                })}
            />
            <Stack.Screen
                name="Favorite Details"
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

export default FavoritesStackNavigator;