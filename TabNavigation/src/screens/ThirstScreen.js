import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';



export default class TabThree extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image source = {require('../../icons/user.png')} style={{tintColor: tintColor}}/>
    ),
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Tab 3!</Text>
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