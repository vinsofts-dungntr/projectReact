import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
    MenuOption,
    MenuTrigger,
    MenuOptions,
    Menu
} from 'react-native-popup-menu';

export default class MainScreen extends Component {

    
  
    render() {
      return (
        <View>
            <Text>
                MainScreen
            </Text>
            <Menu>
                <MenuTrigger text='SelectAction' />
                <MenuOptions>
                    <MenuOption onSelect={() => alert(`Save`)} text='Save' />
                    <MenuOption onSelect={() => alert(`Delete`)} text='Delete' />
                    <Text>Delete</Text>
                    <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
                </MenuOptions>
            </Menu>
        </View>
      );
    }
  }