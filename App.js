import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import reducers from './src/reducers/Index';

class App extends React.Component {

  componentDidMount() {
    var config = {
      apiKey: "AIzaSyALGIYHTuzC4jgv8QscJzBjLNkyqamnmto",
      authDomain: "loginuser-afd60.firebaseapp.com",
      databaseURL: "https://loginuser-afd60.firebaseio.com",
      projectId: "loginuser-afd60",
      storageBucket: "",
      messagingSenderId: "12459238579"
    };
    firebase.initializeApp(config);
  }

  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;


// import React, { Component } from 'react';
// import { StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Card, FormInput, Button } from 'react-native-elements'

// class App extends React.Component {
//     render() {
//         return (
//             <Card 
//               containerStyle={styles.cardContainerStyle}
//               title='Login'
//               titleStyle={styles.cardTitleStyle}
//               dividerStyle={styles.cardDividerStyle}
//             > 
//                 <FormInput
//                     style={styles.inputStyle}
//                     placeholder='Email or Phone'
//                     shake={true}
//                     underlineColorAndroid='transparent'
//                     errorStyle={{ color: 'red' }}
//                     leftIcon={
//                         <Icon 
//                             name='user'
//                             size={24}
//                             color='#FFFFFF'
//                         />
//                     }
//                 />
//                 <FormInput 
//                     secureTextEntry
//                     placeholder='Password'
//                     shake={true}
//                     underlineColorAndroid='transparent'                 
//                     errorStyle={{ color: 'red' }}
//                     leftIcon="
//                         <Icon
//                             name='lock'
//                             size={24}
//                             color='#FFFFFF'
//                         />
//                     "
//                 />
//                 <Button 
                  
//                 />
//             </Card>
//         )
//     }
// }

// const styles = StyleSheet.create({
//   cardContainerStyle: {
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#007aff',
//     marginTop: 20
//   },
//   cardTitleStyle: {
//     color: '#000',
//     fontSize: 22,
//     fontWeight: '100'
//   },
//   cardDividerStyle: {
//     backgroundColor: '#007aff',
//   },
//   inputStyle: {
//     color: '#000',
//     fontSize: 20,
//     fontWeight: '200'
//   }
// })

// export default App;