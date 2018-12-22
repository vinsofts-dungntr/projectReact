import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions, TextInput, 
    Alert, AsyncStorage} from 'react-native';

var {height,width}=Dimensions.get('screen')

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state=({
            textUser: "",
            textPassWorld:"",
        });
    }


    checkUser(){
        if(this.state.textUser=="" || this.state.textPassWorld==""){
            Alert.alert('Error','Tên đăng nhập hoặc mật khẩu không đúng');
        }else{
            Alert.alert('Thành công','Đăng nhập thành công');
        }
    }


  render() {
   
    return (
        
      <View style={styles.container}>
        <View style={{flex:1.5, justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:40,color:'#42a1f4', fontWeight:'normal'}}>YOUR LOGO</Text>
        </View>

        <View style={{flex:2,}}>
            <View style={{ flexDirection:'row',alignItems:'center'}}>
                <Image source={require('../icon/man.png')} style={{marginLeft:25}}/>
                <TextInput 
                    placeholder='User Name' 
                    style={styles.textInput}
                    onChangeText={(text)=>{this.setState({textUser: text})}}>
                        {this.props.navigation.getParam('name')}
                    </TextInput>
            </View>

            <View style={{ flexDirection:'row',alignItems:'center', marginTop:20,justifyContent:'center'}}>
                <Image source={require('../icon/lock.png')} style={{marginLeft:20}}/>
                <TextInput 
                        placeholder='Pass World' 
                        style={styles.textInput}
                        secureTextEntry={true}
                        onChangeText={(text)=>{this.setState({textPassWorld: text})}}
                        ></TextInput>
            </View>

            <TouchableOpacity onPress={()=>{this.checkUser()}}>
                <View style={styles.buttonLogin}>
                    <Text style={{color:'white'}}>Đăng Nhập</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('RegiterScreen')}}>
                <View style={styles.buttonRegiter}>
                    <Text style={{color:'#42a1f4'}}>Đăng Ký</Text>
                </View>
            </TouchableOpacity>

            <Text style={{alignSelf:'center', marginTop:10,color:'#42a1f4'}}>Quên mật khẩu?</Text>
        </View>

        <View style={{flex:1}}>
            <Text style={{alignSelf:'center',color:'#42a1f4',fontSize:15}}>Đăng nhập bằng</Text>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Image source={require('../icon/face.png')} style={{margin:30,width:54, height:54}} ></Image>
                 <Image source={require('../icon/google.png')} style={{margin:30,width:54, height:54}}></Image>
            </View>
        </View>
      </View>
    );
  }
}



const styles=StyleSheet.create({
    
    container:{
        flex:1
    },
    textInput:{
        marginLeft:20,
        marginRight:25,
        width:width-100,
        borderBottomColor:'#42a1f4',
        borderBottomWidth:1,
        fontSize:18,
        padding: 5,
    },
    buttonLogin:{
        alignItems:'center',
        backgroundColor:'#42a1f4',
        marginLeft:35,
        marginRight:35,
        marginTop:30,
        borderRadius: 20,
        width:width-65,
        height:37,
        justifyContent:'center'
    },
    buttonRegiter:{
        alignItems:'center',
        marginLeft:35,
        marginRight:35,
        marginTop:20,
        borderRadius: 20,
        width:width-65,
        height:37,
        justifyContent:'center',
        borderColor: '#42a1f4',
        borderWidth: 1,
    }
    
})