import _ from 'lodash';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions/Index';
import { ListView, YellowBox } from 'react-native';
import ListItem from './ListItem';

class EmployeeList extends Component {

    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);

        YellowBox.ignoreWarnings(['Setting a timer']);
        const _console = _.clone(console);
        console.warn = message => {
            if (message.indexOf('Setting a timer') <= -1) {
                _console.warn(message);
            }
        };        
    }

    componentWillReceiveProps(nextProps) {
        //nextProps are the next set of props that this component
        //will be rendered with
        //this.props is still the old set of props

        this.createDataSource(nextProps);

        YellowBox.ignoreWarnings(['Setting a timer']);
        const _console = _.clone(console);
        console.warn = message => {
            if (message.indexOf('Setting a timer') <= -1) {
                _console.warn(message);
            }
        };
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <ListItem employee={employee} />
    }

    render() {

        return(
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
        )
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }
    })

    return { employees };
};

export default connect(mapStateToProps , { employeesFetch })(EmployeeList);