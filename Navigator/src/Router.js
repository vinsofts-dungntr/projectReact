import React from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import MainScreen from './screens/MainScreen';
import SecondScreen from './screens/SecondScreen';

export const Navigation=createStackNavigator({
    ManHinh_Main: {
        screen: MainScreen
    },
    ManHinh_Second:{
        screen: SecondScreen
    }
})

export const Container=createAppContainer(Navigation);
