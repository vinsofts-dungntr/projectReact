/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import MainScreen from './components/MainScreen';
import {store} from './redux/Store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainScreen/>
      </Provider>
    );
  }
}


