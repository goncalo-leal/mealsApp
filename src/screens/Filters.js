import React, {useState} from 'react';
import {
    View, Text, StyleSheet, Switch,
} from 'react-native';

import DeafultText from '../components/DefaultText';
import Colors from '../constants/Colors';

const Filters = (props) => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);

    return (
        <View style={styles.screen} >
            <View style={styles.titleContainer} >
                <DeafultText size={25} >Filters / Restrictions</DeafultText>
            </View>

            <View style={styles.filterContainer} >
                {/* esta view devia ser um novo componente */}
                <View style={styles.filterItem} >
                    <DeafultText size={18}>Gluten-free</DeafultText>
                    <Switch
                        trackColor={{
                            true: Colors.primaryColor,
                            false: '#d8d8d8'
                        }}
                        thumbColor={Colors.accentColor}
                        value={isGlutenFree}
                        onValueChange={
                            newValue => setIsGlutenFree(newValue)
                        }
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    titleContainer: {
        alignItems: 'center',
    },
    filterContainer: {
        padding: 15,
        alignItems: 'center',
    },
    filterItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
});

export default Filters;