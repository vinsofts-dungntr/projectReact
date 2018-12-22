import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import {connect} from 'react-redux';


const {height,width}=Dimensions.get('window');

export default class Form extends Component{
    render(){
        return(
            <View style={{height:100,width, backgroundColor: 'blue'}}>

            </View>
        );
    }
}