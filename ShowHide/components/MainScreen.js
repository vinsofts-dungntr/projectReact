
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TextInput, TouchableOpacity, Text, View, Dimensions, Image} from 'react-native';
import {connect} from 'react-redux';

var {height, width}=Dimensions.get('window');

class MainScreen extends Component {

    onToogle(){
        this.props.dispatch({type: 'TOOGLE'}),
        this.props.dispatch({type: 'TOOGLE_BUTTON'})
    }

  render() {
      
      const secureTextEntry =  this.props.toogle ? false:true

    return (
      <View style={{flex:1, alignItems:'center',backgroundColor:'white', justifyContent:'center', }}>
        <View style={{flexDirection:'row', width, alignItems:'center'}}>
        <TextInput 
                style={{width: width-80, height:50,marginLeft: 10, marginRight: 10, borderColor:'gray', borderWidth:1, 
                paddingTop:10}}
                placeholder='Enter Text Here!'
                secureTextEntry={secureTextEntry}
                >
        </TextInput>

        <TouchableOpacity onPress={() => this.onToogle()}>
            <View style={{backgroundColor:'white'}}>

                {this.props.toogleButton ? 
                                            <Image source={require('../icon/view.png')}></Image> :
                                            <Image source={require('../icon/hide.png')}></Image>}
                
            </View>
        </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

var mapStateToProps=(state)=>{
    return{
        toogle: state.toogle,
        toogleButton: state.toogleButton
    }
}

export default connect(mapStateToProps)(MainScreen)


