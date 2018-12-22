import React, {Component} from 'react';
import {
    TouchableOpacity,
    StyleSheet, 
    Text,
    View,
    TextInput, Dimensions, Alert} from 'react-native';
import {firebaseApp} from './FirebaseConfix';

var {height, width} = Dimensions.get('window');

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state=({
            userName:'',
            passWord: ''
        })
    }

    login(){
        firebaseApp.auth().signInWithEmailAndPassword(this.state.userName, this.state.passWord)
        .then(()=>{
            Alert.alert('Thong bao', 'Dang nhap thanh cong',[
                {text:'OK', onPress:()=> this.props.navigation.navigate('HomeScreen')}
            ],
            {cancelable: false})
            this.setState({userName:'', passWord:''})
        })
        .catch(function(error) {
            alert('Dang nhap ko thanh cong')
        });
    }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:40}}>YOUR LOGO</Text>
        </View>

        <View style={{flex:2, alignItems:'center', paddingTop:20}}>
            <TextInput 
                    style={{width: width-80, borderBottomWidth:1, marginTop: 10}}
                    placeholder='User Name'
                    onChangeText={(text) => this.setState({userName:text})}>
            </TextInput>

            <TextInput 
                    style={{width: width-80, borderBottomWidth:1, marginTop: 10}}
                    placeholder='PassWord'
                    onChangeText={(text) => this.setState({passWord: text})}>
            </TextInput>

            <TouchableOpacity onPress={() => this.login()}>
                <View style={{backgroundColor:'blue', borderRadius: 20, borderWidth:1, width: width-80, marginTop: 30}}>
                    <Text>LOGIN</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Regiter')}>
                <View style={{backgroundColor:'sky'}}>
                    <Text>REGITER</Text>
                </View>
            </TouchableOpacity>
        </View>

      </View>
    );
  }
}