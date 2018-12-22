import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';



export default class TabTwo extends Component {
  
  static navigationOptions = {
    // showIcon:true,
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
        <Image
        source={require('../../icons/settings.png')}
        style={{tintColor: tintColor}}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Tab 2!</Text>
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