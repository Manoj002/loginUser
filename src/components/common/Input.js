import React from 'react';
import  {View, Text, TextInput, StyleSheet} from 'react-native';

const Input = ({multiline, editable, value, onChangeText, placeholder, secureTextEntry, underlineColorAndroid}) => {

    const { inputStyle, containerStyle } = styles;

    return(
        <View style={containerStyle}>
            <TextInput
                multiline={multiline}
                editable={editable}
                underlineColorAndroid={underlineColorAndroid}
                secureTextEntry={secureTextEntry} 
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}

export { Input };

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 17,
        lineHeight: 16,
        flex: 2,
        borderColor: '#E91B89'
    },
    // labelStyle: {
    //     fontSize: 18,
    //     paddingLeft: 10,
    //     flex: 1,
    //     color: '#000',
    // },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
})