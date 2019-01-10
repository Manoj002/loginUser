import React from 'react';
import firebase from 'firebase';
import { View, Text, StyleSheet } from 'react-native';
import { connect,  } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions/Index';
import { Card, CardSection, Button, Input, Spinner } from './common/Index';

class LoginForm extends React.Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({email, password});
    }

    renderError() {
        if(this.props.error) {
            return(
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    renderButton() {
        if(this.props.loading) {
            return <Spinner size='large'/>
        }

        return(
            <Button 
                onPress={this.onButtonPress.bind(this)} 
                buttonText={'SIGN IN'}
            />
        )
    }

    render() {
        return(
            <View
                style={styles.container}
            >
                <CardSection>
                    <Input 
                        label="Email"
                        onChangeText={this.onEmailChange.bind(this)}
                        placeholder='Email'
                        underlineColorAndroid='transparent'
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                        label="Password"
                        placeholder="Password"
                        underlineColorAndroid='transparent'
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </View>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return { email, password, error, loading };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        elevation: 1,
        zIndex: 99,
        height: 400,
        width: "90%",
        marginLeft: 20,
        marginRight: 20
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
})

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser 
})(LoginForm);