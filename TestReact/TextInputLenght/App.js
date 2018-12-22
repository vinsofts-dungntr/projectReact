/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ValidateTextInput from 'react-native-validate-textinput';



export default class App extends Component {

  constructor(props){
    super(props);
    this.state=({
      textUser:''
    })
  }

  onChangeText(){
    if(this.state.textUser.length <= 32 && this.state.textUser.length >= 2){
      alert('Thanh cong roi day')
    }else if(this.state.textUser.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)){
      alert('Sai cho nao roi')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ValidateTextInput
            
            placeholder='Name'
            style={{width: 200, borderBottomWidth:1, paddingVertical: 5}}
            onChangeText={(text) => this.setState({textUser: text})}
            
            >
        </ValidateTextInput>
        <TouchableOpacity onPress={() => this.onChangeText()}>
          <View style={{width:200, height:40, backgroundColor:'yellow', margin:20}}>
            <Text>CLICK</Text>
          </View>
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
