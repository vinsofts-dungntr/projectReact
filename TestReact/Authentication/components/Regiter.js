import React, {Component} from 'react';
import {TextInput,TouchableOpacity, Dimensions, Text, View, Alert} from 'react-native';
import {firebaseApp} from './FirebaseConfix';

var {height, width} = Dimensions.get('window');

export default class Regiter extends Component {
    constructor(props){
        super(props)
        this.state=({
            userName:'',
            passWord:''
        })
    }

    regiter(){
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.userName, this.state.passWord)
        .then(()=>{
            Alert.alert('Thong bao', 'Dang ky thanh cong',[
                {text:'OK', onPress:() => this.props.navigation.navigate('Login')},
            ],
            {cancelable: false})
            this.setState({userName:'', passWord:''})
        }).catch(function(error) {
            alert('dang ky khong thanh cong');
        })     
    }

  render() {
    return (
      <View style={{flex:1, backgroundColor:'yellow'}}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:40}}>REGITER</Text>
        </View>

        <View style={{flex:2, alignItems:'center', paddingTop:20}}>
            <TextInput 
                    style={{width: width-80, borderBottomWidth:1, marginTop: 10}}
                    placeholder='User Name'
                    onChangeText={(text) => this.setState({userName: text})}>
            </TextInput>

            <TextInput 
                    style={{width: width-80, borderBottomWidth:1, marginTop: 10}}
                    placeholder='PassWord'
                    onChangeText={(text) => this.setState({passWord: text})}>
            </TextInput>

            <TouchableOpacity onPress={() => this.regiter()}>
                <View style={{backgroundColor:'sky'}}>
                    <Text>REGITER</Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}