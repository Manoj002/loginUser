import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#007aff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.4,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff'
    }
})