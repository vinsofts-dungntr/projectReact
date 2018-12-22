/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MainScreen from './components/MainScreen';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


var defaultState={

}

const reducers=(state=defaultState, action)=>{
  return state
}
let store = createStore(reducers);



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainScreen/>
      </Provider>
    );
  }
}

