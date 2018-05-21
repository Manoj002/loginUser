import React from 'react';
import {Text,TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({onPress, buttonText}) => {

    const { buttonStyle, textStyle } = styles;

    return(
        <TouchableOpacity 
            onPress={onPress}
            style={buttonStyle}>
            <Text style={textStyle}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

export { Button };

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 10,
        marginRight: 10,
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
})