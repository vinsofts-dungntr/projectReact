/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import MainScreen from './components/MainScreen';


export default class App extends Component {

  

  render() {
    return (
      <MenuProvider>
        <MainScreen/>
      </MenuProvider>
    );
  }
}

