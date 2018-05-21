import React, { Component } from 'react';
import { Text, Picker, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { employeeCreate, employeeUpdate } from '../actions/Index'
import { Card, CardSection, SoftButton, Input } from './common/Index';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    
    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }
    
    render() {
        console.log('in employee create')
        console.log(this.props.name);
        console.log(this.props.phone);
        return(
            <Card>
                <EmployeeForm {...this.props}/>

                <CardSection>
                    <SoftButton
                        onPress={this.onButtonPress.bind(this)}
                        buttonText="Save"
                    />
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeCreate, employeeUpdate })(EmployeeCreate);