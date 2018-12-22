
import React, {Component} from 'react';
import {TextInput, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';



class MainScreen extends Component {

    onShow(nameType){
        this.props.dispatch({type: nameType})
    }

  render() {

    const secureTextEntry = this.props.isShow ? true:false;

    return (
      <View style={{backgroundColor:'yellow', flex:1, alignItems:'center'}}>
        <TextInput
                    placeholder='Enter text here'
                    style={{width:200, height: 50, backgroundColor:'blue'}}
                    secureTextEntry={secureTextEntry}
                    >
        </TextInput>

        <TouchableOpacity onPress={()=>{
            this.onShow('SHOW')
        }}>
            <View>
                <Text>Show</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

var mapStateToProps=(state) => {
    return{
        isShow: state.isShow
    }
}
export default connect(mapStateToProps)(MainScreen);