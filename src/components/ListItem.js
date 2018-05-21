import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection }from './common/CardSection';

class ListItem extends Component {

    onRowPress() {
        Actions.employeeEdit({ employee: this.props.employee });
    }

    render() {
        const { name } = this.props.employee;
        
        return(
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection style={styles.cardSectionStyle}>
                        <Text style={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        padding: 15
    },
    cardSectionStyle: {
        borderBottomWidth: 0.5,
        borderColor: '#ddd',
        padding: 10
    }
})

export default ListItem;