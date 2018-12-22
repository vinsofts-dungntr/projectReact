/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View, TouchableOpacity, AsyncStorage} from 'react-native';




export default class App extends Component {
  constructor(props){
    super(props)
    this.state=({
      userName:'',
      passWord:''
    })
  }

  onSave = async () =>{
    try{
      await AsyncStorage.setItem('UserName',this.state.userName)
      
    } catch(error){

    }
  }

  componentWillMount(){
    onReciver = async () =>{
      try{
        const value = await AsyncStorage.getItem('UserName')
        console.log(`dungXXXX: ${JSON.stringify(value)}`);
        if(value!=null){
          this.setState({userName: value})
        }
      } catch(error){
  
      }
    }
  }
  

  componentDidMount(){
    
  }
  
  render() {

    
    return (
      <View style={styles.container}>
        <TextInput placeholder='UserName'
                onChangeText={(text) => this.setState({userName:text})}>
                {this.onReciver}

        </TextInput>

        <TextInput placeholder='PassWord'
                  onChangeText={(text) => this.setState({passWord: text})}>

        </TextInput>

        <TouchableOpacity onPress={()=>this.onSave()}>
          <Text>Login</Text>
        </TouchableOpacity>
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
