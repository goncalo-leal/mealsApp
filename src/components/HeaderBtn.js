import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const HeaderBtn = (props) => {
    const initialIcon = props.isFav ? 'heart' : 'heart-outline';
    const [icon, setIcon] = useState(initialIcon);

    return (
        <TouchableOpacity onPress={() =>{
            if (icon === 'heart-outline') {
                setIcon('heart');
                Alert.alert("Adicionado aos favoritos");
            }
            else {
                setIcon('heart-outline');
                Alert.alert("Removido dos favoritos");
            }
        }}>
            <Ionicons name={icon} size={24} color="white" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

});

export default HeaderBtn;