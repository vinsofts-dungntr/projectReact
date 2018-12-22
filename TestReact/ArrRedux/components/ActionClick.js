
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class ActionClick extends Component{

    onMemorized(nameType){
        this.props.dispatch({type: nameType})
    }

    render(){
    
        return(
            <View style={{flex:1, backgroundColor:'white', height:100, flexDirection:'row', justifyContent:'space-around'}}>
                <TouchableOpacity onPress={()=> this.onMemorized('STATUS_SHOW_ALL')}>
                    <View style={{backgroundColor:'blue'}}>
                        <Text>SHOW ALL</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> this.onMemorized('STATUS_FORGOT')}>
                    <View style={{backgroundColor:'blue'}}>
                        <Text >FORGOT</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}



export default connect()(ActionClick);