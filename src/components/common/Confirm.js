import React from 'react';
import { Text, View, StyleSheet, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { SoftButton } from './SoftButton';
import { CardSectionWithoutBorder } from './CardSectionWithoutBorder';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    
    const { containerStyle, textStyle, cardSectionStyle, viewStyle, secondCardSectionStyle} = styles;

    return(
        <Modal  //react-native-modal github
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {}}
        >
            <View style={containerStyle}>
                <CardSectionWithoutBorder style={cardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSectionWithoutBorder>

                <CardSectionWithoutBorder style={secondCardSectionStyle}>
                    <SoftButton
                        onPress={onAccept}
                        buttonText='Yes'
                    />
                    <SoftButton
                        onPress={onDecline}
                        buttonText='No'
                    />
                </CardSectionWithoutBorder>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    cardSectionStyle: {
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    secondCardSectionStyle: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    textStyle: {
        flex: 1,
        color: '#007aff',
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 40,
        paddingTop: 12,
        paddingBottom: 12,
        fontWeight: '100'
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
        paddingLeft: 40,
        paddingRight: 40,
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
})

export { Confirm };