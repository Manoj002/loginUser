import React from 'react';
import {Text,TouchableOpacity, StyleSheet} from 'react-native';

const SoftButton = ({onPress, buttonText}) => {

    const { buttonStyle, textStyle } = styles;

    return(
        <TouchableOpacity 
            onPress={onPress}
            style={buttonStyle}>
            <Text style={textStyle}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

export { SoftButton };

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        backgroundColor: '#007aff',
        marginLeft: 7,
        marginRight: 7
    },
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 17,
        padding: 14
    }
})