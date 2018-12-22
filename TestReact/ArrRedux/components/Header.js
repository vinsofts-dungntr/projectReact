import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import {connect} from 'react-redux';

class Header extends Component{

    isShowAdd(){
        this.props.dispatch({
          type: 'TOOGLE_ADD'
        })
      }

    render(){
        return(
        <View style={{flex: 1, backgroundColor:'red', alignItems:'center'}}>
            <TouchableOpacity onPress={()=>this.isShowAdd()}>
                 <Text style={{fontSize:30}}>+</Text>
            </TouchableOpacity>
        </View>
        );
    }
}

export default connect()(Header);