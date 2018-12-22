
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import ActionClick from './ActionClick';
import FlatListItem from './FlatListItem';
import Header from './Header';
import Form from './Form';

var {height,width}=Dimensions.get('window');

class MainScreen extends Component {

  getStatusDat(){
    const {isShowAll,data}=this.props;
    if(isShowAll==='SHOW_ALL') return data;
    if(isShowAll==='FORGOT') {
      return data.filter(e => e.memorized);
    }
    return data;
  }

  
  render() {
    console.log(`Data is: ${JSON.stringify(this.props.data)}`);
    return (
      <View style={{backgroundColor:'yellow', flex:1, justifyContent:'space-between'}}>
        <Header /> 
          {this.props.isShow ? <Form/> : null}
          <FlatList 
                    data={this.getStatusDat()}
                    renderItem={({item})=>{
                        
                        return(
                          <FlatListItem item={item} parentFlatList={this}/>
                        );
                        
                    }}
                    keyExtractor={(item, index) => item.id}
                    style={{height: 400}}>
          </FlatList>

          <ActionClick />
          
      </View>
    );
  }
}

var mapStateToProps=(state)=>{
    return{
        isShowAll: state.status,
        data: state.arrWords,
        isShow: state.isAdd  
    }
}


export default connect(mapStateToProps)(MainScreen);


