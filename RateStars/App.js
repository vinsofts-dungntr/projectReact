/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Stars from 'react-native-stars'



export default class App extends Component {
  render() {
    return (
      <View style={{alignItems:'center'}}>
        <Stars
          half={true}
          default={2.5}
          //update={(val)=>{this.setState({stars: val})}}
          spacing={4}
          starSize={40}
          count={5}
          halfStar={require('./icon/half.png')}
          emptyStar={require('./icon/empty.png')}
          fullStar={require('./icon/full.png')}
          />
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
  
});
