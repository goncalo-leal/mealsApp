import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const CategoriesGridTile = (props) => {
    return (
        <TouchableOpacity 
            onPress={props.onSelect}
            style={styles.gridItem}
        >
            <View style={{...styles.container, backgroundColor: props.color}}>
                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    container: {
        flex: 1,
        width: '90%',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 15,
    },
    title: {
        fontFamily: 'Oswald',
        fontSize: 22,
        textAlign: 'center',
    }
});

export default CategoriesGridTile;
