import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

export default class SecondScreen extends Component{
  render(){
    console.log(`this.prop.navigation = ${JSON.stringify(this.props.navigation)}`);

    var getData=this.props.navigation.state.params.name;
    const navigation=this.props.navigation;
    return(
      <View>
        <Text>SecondScreen</Text>
        <Button title='Go to Second Screen again'
                onPress={()=>{navigation.push('ManHinh_Second')}}></Button>
        <Button title='Go to Main Screen!'
                onPress={()=>{navigation.push('ManHinh_Main')}}></Button>
        <Button title='Go Back MainScreen'
                onPress={()=>{navigation.goBack()}}></Button>

        <Text>{getData}</Text>
        
      </View>
    );
  }
}