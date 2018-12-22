/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MainScreen from './components/MainScreen';
import {Provider} from 'react-redux';
import {createStore} from 'redux';


const oldState = {isShow: true}

const reducer = (state=oldState, action)=>{
  if(action.type==='SHOW'){
    return{
      isShow: !state.isShow
    }
  }
  return state;
}

const store = createStore(reducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainScreen/>
      </Provider>
    );
  }
}

