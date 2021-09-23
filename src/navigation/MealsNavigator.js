import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';

import ScreenTitle from '../components/ScreenTitle';

import Filters from '../screens/Filters';

import Colors from '../constants/Colors';

import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions= {{
                    headerStyle: {
                        backgroundColor: Colors.primaryColor,
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                }}
            >
                <Drawer.Screen
                    name="Home" 
                    component={TabNavigator}
                    options={{
                        headerShown: false,
                        drawerLabelStyle: {
                            fontFamily: 'Oswald-bold',
                            fontSize: 18,
                        }
                    }}
                />
                <Drawer.Screen
                    name="Filters" 
                    component={Filters}
                    options={({ route }) => ({
                        headerTitle: props => <ScreenTitle title="Filters" />,
                        title: 'Filters',
                        drawerLabelStyle: {
                            fontFamily: 'Oswald-bold',
                            fontSize: 18,
                        }
                    })}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}