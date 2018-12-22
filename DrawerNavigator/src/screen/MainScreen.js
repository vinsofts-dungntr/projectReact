import React, {Component} from 'react';
import {Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native'


export default class MenuScreen extends Component {
  
  render() {
    
    var {height,width}=Dimensions.get('window');
    return (
        <View style={{flex:1, backgroundColor:'yellow', borderBottomRightRadius:height/2, borderRightWidth:1}}>

          <View style={{height:height/4,justifyContent:'center',alignItems:'center',backgroundColor:'gray'}}>
            <Image source={require('../../icons/avatar.png')}></Image>
          </View>

          <View style={{alignItems:'center', backgroundColor:'blue', marginTop:100}}>
            <Text>Item!</Text>
          </View>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
