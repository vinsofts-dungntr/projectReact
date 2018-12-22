import React, {Component} from 'react';
import {Container} from './src/Router';
import {View, Text,Image} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={{flexDirection:'row', padding:10}}>
        <Image source={require('../icons/menu.png')}></Image>
      </View>
    );
  }
}