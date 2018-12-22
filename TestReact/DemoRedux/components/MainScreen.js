
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';


var {height,width}=Dimensions.get('window')
export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
                style={{height:60, width}}
                placeholder='Enter Text Here!'
                >

        </TextInput>
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
    flexDirection:'row',
  },
});
