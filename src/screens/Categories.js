import React from 'react';
import {
    View, Text, StyleSheet, FlatList, TouchableOpacity,
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoriesGridTile from '../components/CategoriesGridTile';

const Categories = (props) => {
    const renderGridItem = (itemData) => {
        return(
            <CategoriesGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate(
                        'Meals',
                        {
                            categoryId: itemData.item.id,
                            name: itemData.item.title,
                        }
                    );
                }}
            />
        );
    };

    return (
        <View  >
            <FlatList
                numColumns={2}
                data={CATEGORIES}
                renderItem={renderGridItem}
            />
        </View>
    );
};

Categories.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Colors.primaryColor,
    },
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
    },
    gridItem: {
        flex: 1,
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Categories;