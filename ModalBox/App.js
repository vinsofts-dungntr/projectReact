/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modalbox';


var {height, width} = Dimensions.get('window')

export default class App extends Component {

  state=({
    isShow: false,
    text:''
  })


  
  onShow(){
    this.refs.myModal.open();
    var date= new Date().getDate();
    var month=new Date().getMonth()+1;
    var year=new Date().getFullYear();
    var hour=new Date().getHours();
    var minute=new Date().getMinutes();
   this.setState({text: date+'/'+month+'/'+year+'...'+hour+'h'+minute+''});
  }

  onClose(){
    this.refs.myModal.close();
  }

  render() {

    return (
      <View style={{flex:1}}>
        <TouchableOpacity onPress={()=> this.onShow()}>
          <Text>
            Click to Show
          </Text>
        </TouchableOpacity>
        <Modal
          ref={'myModal'}
              style={{
                justifyContent:'center',
                shadowColor:'gray',
                borderRadius: 10, 
                width: width-80,
                height:300,
                
              }}
              position='center'
              backdrop={true}
              
              >
              <View>
                <TouchableOpacity onPress={()=> this.onClose()}>
                  <Text>{this.state.text}</Text>
                </TouchableOpacity>
                
              </View>

        </Modal>
        
      </View>
    );
  }
}


