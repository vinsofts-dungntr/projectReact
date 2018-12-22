/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import MainScreen from './components/MainScreen';
import {Provider} from 'react-redux';
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

