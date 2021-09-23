import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainStackNavigator from './MainStackNavigator';
import FavoritesStackNavigator from './FavoritesStackNavigator';
import Colors from '../constants/Colors';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator
            screenOptions= {({route}) => ({
                tabBarActiveTintColor: Colors.accentColor,
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ focused, color, size }) => {
                    let icon;

                    if (route.name === 'All Meals') {
                        icon = focused
                            ? <Ionicons name='restaurant' size={22} color={color} />
                            : <Ionicons name='restaurant-outline' size={22} color={color} />;
                    } else if (route.name === 'FavoritesStack') {
                        icon = focused
                            ? <Ionicons name='heart' size={22} color={color} />
                            : <Ionicons name='heart-outline' size={22} color={color} />;
                    }

                    // You can return any component that you like here!
                    return icon;
                },
            })}
        >
            <Tab.Screen
                name="All Meals"
                component={MainStackNavigator}
                options={{
                    headerShown: false,
                    tabBarLabel: props => <Text style={{fontFamily: 'Oswald', fontSize: 14, color: 'black'}}>All Meals</Text>,
                }}
            />
            <Tab.Screen
                name="FavoritesStack"
                component={FavoritesStackNavigator} 
                options={{
                    headerShown: false,
                    tabBarLabel: props => <Text style={{fontFamily: 'Oswald', fontSize: 14, color: 'black'}}>Favorites</Text>,
                }}
            />
        </Tab.Navigator>
    );
}