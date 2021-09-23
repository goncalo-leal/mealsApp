import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const ScreenTitle = (props) => {
    return (
        <Text style={styles.title} >{props.title}</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Oswald-bold',
        fontSize: 24,
        color: 'white',
    }
});

export default ScreenTitle;