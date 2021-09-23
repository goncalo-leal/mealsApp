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
    return (
        <TouchableOpacity onPress={() =>{
            props.navigation.openDrawer();
        }}>
            <Ionicons name='menu' size={24} color="white" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

});

export default HeaderBtn;