import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';


class FlatListItem extends Component{
  
    remember(){
      this.props.dispatch({
        type: 'STATUS_MEMORIZED',
        id: this.props.item.id
      });
    }

    forget(){
        this.props.dispatch({
            type: 'STATUS_REMEMBER',
            id: this.props.item.id
        })
    }
    render(){
      const textDecorationLine=this.props.item.memorized ? 'line-through' : 'none'

      const {en,vn}=this.props.item;
        return(
            <View style={{backgroundColor:'gray', margin:10, flexDirection:'row', justifyContent:'space-around'}}>
                <View>
                  <Text style={{textDecorationLine}}>{en}</Text>
                  <Text>{vn}</Text>
                </View>
  
                <View>
                  <TouchableOpacity onPress={()=> this.remember()}>
                    <Text style={{color:'blue'}}>Remember!</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=> this.forget()}>
                    <Text style={{color:'blue'}}>Foget</Text>
                  </TouchableOpacity>
                </View>
            </View>
        );
    }
  }

  export default connect()(FlatListItem);
  