import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';



export default class TabOne extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Image
        source={require('../../icons/home.png')}
        style={{tintColor: tintColor}}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
          <Text>Tab 1!</Text>
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