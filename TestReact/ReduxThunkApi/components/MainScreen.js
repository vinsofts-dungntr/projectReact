import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import *as Action from '../redux/action/Action';
import {connect} from 'react-redux';

class MainScreen extends Component {
 
  render() {
    console.log(`contacts: ${JSON.stringify(this.props.contacts)}`)
    
      if(this.props.isFatching){
        return(<View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
          <ActivityIndicator size='large'></ActivityIndicator>
          <Text>Loading...</Text>
        </View>)
      }

      return (
        <View style={styles.container}>
          <FlatList data={this.props.contacts}
                    renderItem={({item}) => {
                      return(
                        <Text>{item.name}</Text>
                      )
                    }}
                    keyExtractor={({id}) => id.toString()}>
          </FlatList>
        </View>
      );
  }

  componentDidMount(){
      this.props.fetchContacts();
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

var mapStateToProps=(state)=>{
    return{
        isFatching: state.isFetching,
        errorMessage: state.errorMessage,
        contacts: state.contacts
    }
    
}

export default connect(mapStateToProps, Action)(MainScreen)
