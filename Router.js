import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';
import EmployeeList from './src/components/EmployeeList';
import EmployeeCreate from './src/components/EmployeeCreate';
import EmployeeEdit from './src/components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{paddingTop: 12}}>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Login" />
                </Scene>

                <Scene key="main">
                    <Scene
                        onRight={() => Actions.employeeCreate()}
                        rightTitle="Add"
                        key="employeeList" 
                        component={EmployeeList} 
                        title="User's" 
                        initial 
                    />
                    <Scene 
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Create User"
                    />
                    <Scene 
                        key="employeeEdit"
                        component={EmployeeEdit}
                        title="Edit User"
                    />
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterComponent;