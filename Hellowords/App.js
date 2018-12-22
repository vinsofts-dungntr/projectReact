/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput} from 'react-native';



export default class App extends Component {
  constructor(props){
    super(props)
    this.state=({
      textChange:"",
    });
  }
  render(){
    return(
      <View style={{flex:1,padding:10}}>
        <TextInput placeholder='Text here!' style={{height:100,fontSize:45}}
        onChangeText={(text)=>{
          this.setState({textChange:text})
        }}></TextInput>
        <Text>{this.state.textChange}</Text>
      </View>
    );
  }
}




