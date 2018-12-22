import React, {Component} from 'react';
import {TextInput, Text, View,TouchableOpacity} from 'react-native';

export default class MainScreen extends Component{
  constructor(props){
    super(props)
    this.state=({
        textChange:"",
    });
  }
  static navigationOptions={
    title:'Main',
  }
  render(){
    var passParam={
      name:this.state.textChange,
      age:"30"
    };
    return(
      <View>
        <TouchableOpacity onPress={()=>{
          this.props.navigation.navigate('ManHinh_Second',passParam)
        }}>
          <Text>MainScreen</Text>
        </TouchableOpacity>
        <TextInput style={{height:60,fontSize:25}}
                    placeholder='Text here!'
                    onChangeText={(text)=>{
                      this.setState({textChange:text})
                    }}>
        </TextInput>

        <Text>{this.state.textChange}</Text>
      </View>
    );
  }
}