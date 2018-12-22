import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import {Dimensions} from 'react-native';

export default class SecondScreen extends Component {

  render() {
    var {height,width}=Dimensions.get('window');
    return (
      <View style={styles.container}>
        <View style={{
          flex:0.08,borderBottomColor:'gray',borderBottomWidth:1,justifyContent:'center'}}>
            <TouchableOpacity style={{padding:10}} onPress={()=> this.props.navigation.openDrawer()}>
              <Image source={require('../../icons/menu.png')}></Image>
            </TouchableOpacity>
          </View>
         <TouchableOpacity
        onPress={()=>{
          this.props.navigation.openDrawer();
        }}>
          <Text>Second Screen!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
