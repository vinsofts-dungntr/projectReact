
import {createDrawerNavigator,createAppContainer, createStackNavigator, DrawerItems} from 'react-navigation';
import HomeScreen from './screen/HomeScreen';
import SecondScreen from './screen/SecondScreen';
import ThirstScreen from './screen/ThirstScreen';
import {Dimensions,Image,Text,View,TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import MenuScreen from './screen/MainScreen';

var {height,width}=Dimensions.get('window');


export const CustomDrawer=(props)=>(
    <View>
        <MenuScreen {...props}/>
    </View>
    
);

export const StackNavigate=createStackNavigator({
    Home:{screen: HomeScreen,},
    Second:{screen: SecondScreen},
    Thirst:{screen: ThirstScreen}
},)


export const DrawerNavigate=createDrawerNavigator({
    // Manhinh_Main:{screen: StackNavigate}
    Home:{screen: HomeScreen,},
    Second:{screen: SecondScreen},
    Thirst:{screen: ThirstScreen}
    },
    {
    drawerWidth: width-80,
    drawerPosition:'left',
    contentComponent: CustomDrawer,
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose'
}
);

export const Container=createAppContainer(DrawerNavigate);