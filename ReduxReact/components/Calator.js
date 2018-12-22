
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import ChangeColor from './ChangeColor';


class Caculator extends Component {
  
  render() {
    return (
      <View style={{flex: 1, alignItems:'center', backgroundColor:'yellow', flexDirection:'row', padding:10}}>
        <TouchableOpacity onPress={()=>{
            this.props.dispatch({type: 'UP'})
        }}>
            <View style={{width:20, height:20, backgroundColor:'white', alignItems:'center', margin:10}}>
                <Text>+</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{
            this.props.dispatch({type: 'DOWN'})
        }}>
            <View style={{width:20, height:20, backgroundColor:'white', alignItems:'center', margin:10}}>
                <Text>-</Text>
            </View>
        </TouchableOpacity>

        <ChangeColor/>
      </View>
    );
  }
}


export default connect()(Caculator)

