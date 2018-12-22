/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import RNAccountKit from 'react-native-facebook-account-kit';



export default class App extends Component {


  componentDidMount(){
    RNAccountKit.loginWithPhone()
    .then((code) => {
      if (!code) {
        console.log('Login cancelled')
    } else {
        console.log(`Logged with phone. Token: ${code}`)
    }
  });
  }


  render() {

    RNAccountKit.configure({
      responseType: 'code', // 'token' by default,
      titleType: 'login',
      initialAuthState: '',
      initialEmail: 'some.initial@email.com',
      initialPhoneCountryPrefix: '+84', // autodetected if none is provided
      facebookNotificationsEnabled: true, // true by default
      readPhoneStateEnabled: true, // true by default,
      receiveSMS: true, // true by default,
      defaultCountry: 'VN', 
    })


    

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
