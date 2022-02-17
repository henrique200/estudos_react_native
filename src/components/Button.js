import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({onPress}) => {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={.7}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        alignItems: 'center',
        borderRadius: 7,
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    },
})

export default Button;