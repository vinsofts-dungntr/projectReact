/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const options = {
  tittle:'Select Avatar',
  takePhotoButtonTittle: 'Take Photo With Camera',
  chooseFromLibaryButtonTitte: 'Choose From Libary'
}

export default class App extends Component {

  constructor(props){
    super(props)
    this.state=({
      avatarSource: null,
    })
  }



  render() {

    myFunction=()=>{
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          const source = { uri: response.uri };
      
          this.setState({
            avatarSource: source,
          });
        }
      });
    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <TouchableOpacity>
          <View style={{width:200, height: 40, backgroundColor:'yellow'}}>
            <Text>Choose Image</Text>
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
