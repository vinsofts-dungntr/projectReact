/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Caculator from './components/Calator';
import {connect} from 'react-redux';

class App extends Component {

  render() {
    const color=this.props.changeColor ? 'red':'blue';
    return (
      <View style={{flex: 1, alignItems:'center'}}>
        <Text style={{flex:1, alignSelf:'center', color}}>{this.props.myValue}</Text>
        
        <Caculator/>
      </View>
    );
  }
}

var myStateToProps=(state)=>{
    return{
      myValue: state.value,
      changeColor: state.changeColor,
    }
}
export default connect(myStateToProps)(App);

