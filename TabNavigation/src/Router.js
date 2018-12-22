import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import TabOne from './screens/MainScreen';
import TabTwo from './screens/SecondScreen';
import TabThree from './screens/ThirstScreen';
import Icon from 'react-native-vector-icons/FontAwesome';


export const TabNavigation=createBottomTabNavigator({
    Home:{screen: TabOne},
    Setting:{screen: TabTwo},
    Properties:{screen: TabThree}
},);

export const Container=createAppContainer(TabNavigation)