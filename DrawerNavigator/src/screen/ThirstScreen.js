import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import {Dimensions} from 'react-native';

export default class ThirstScreen extends Component {

  render() {
    var {height,width}=Dimensions.get('window');
    return (
      <View style={styles.container}>
      <View style={{flexDirection:'row',height:50,width,borderBottomWidth:0.2,alignSelf:'flex-start',shadowColor:'red'}}>
          <TouchableOpacity onPress={()=>{
            this.props.navigation.openDrawer();
          }}>
          <Image source={require('../../icons/menu.png')} style={{margin:10,alignSelf:'flex-start'}}></Image>
        </TouchableOpacity>
        </View>
        <Text style={{fontSize:30}}>Thirst Screen!</Text>
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
