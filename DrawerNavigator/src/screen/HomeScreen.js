import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Image, DrawerLayoutAndroid} from 'react-native';
import {Dimensions} from 'react-native'
import {CustomDrawer} from '../Router';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import MainScreen from './MainScreen';

export default class HomeScreen extends Component {

  render() {
    
    var {height,width}=Dimensions.get('window');
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
      
    );
    
    return (
        
        <View style={{flex:1}}>
        <View style={{
          flex:0.08,borderBottomColor:'gray',borderBottomWidth:1,justifyContent:'center'}}>
            <TouchableOpacity style={{padding:10}} onPress={()=> this.props.navigation.openDrawer()}>
              <Image source={require('../../icons/menu.png')}></Image>
            </TouchableOpacity>
          </View>
        <TouchableOpacity
        onPress={()=>{
          this.props.navigation.navigate('Second');
        }}>
          <Text>Home Screen!</Text>
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
