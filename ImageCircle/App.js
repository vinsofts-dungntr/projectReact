/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.images}>
          <Image source={require('./icon/vegeta.jpg')} style={{width:100, height:100, borderRadius:100}}></Image>
        </View>
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
  images:{
    alignItems:'center',
    borderRadius: 100,
    width: 100,
    height: 100,
    backgroundColor:'blue',
    borderWidth: 1,
    borderColor: 'gray',
    
  }
});
