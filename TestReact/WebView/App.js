/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, WebView, Text, View, ActivityIndicator, Dimensions} from 'react-native';
import Axios from 'axios';

var {height, width} = Dimensions.get('window')

export default class App extends Component {

  constructor(props){
    super(props);
    this.state=({
      isLoading: true
    })
  }

  componentDidMount(){
    Axios.get('https://api.androidhive.info/contacts/?fbclid=IwAR2okcesBe9xFsiIYVz7EspkWq0O-H0XOD3VwrcQdMZ7y0ec5eedAUXX94U')
        .then(respone =>{
          console.log(`data: ${JSON.stringify(respone)}`)
        }).catch((error) =>{
          console.log(`Error: ${JSON.stringify(error)}`)
        })
  }

  onStop(){
    this.setState({isLoading: false});
  }

  

  render() {

    var htmlSource = `<image src = "https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg" style = "width: 100%; height: 100%/4">`+
          `<image src = "http://babykidvn.com/assets/san-pham/2017_12/xe-dien-mau-trang-4x4-min.png" style = "width: 100; height: 100; display: block;
              margin-left: auto;
              margin-right: auto; ">`
            
  
    return (
      <View style={{flex:1}}>
        <View style={{backgroundColor:'blue', width, height: height/13}}>

        </View>
      </View>
      
    );
  }
}


