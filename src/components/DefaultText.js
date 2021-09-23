import React from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native';

const DeafultText = (props) => {
    return (
        <Text style={{...styles.text, fontSize: props.size}}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Oswald',
    },
});

export default DeafultText;