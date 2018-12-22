import React, {Component} from 'react';
import { 
        StyleSheet,
        Text,
        View,
        Image,
        TouchableOpacity,
        TextInput, Alert,AsyncStorage 
        } from 'react-native';


export default class Regiter extends Component {

  constructor(props){
    super(props)
    this.state=({
      textEmail:"",
      textPassWorld:"",
      textName:"",
      textPhone:""
    })
  }

  onRegiter(params){
    if(this.state.textEmail!=""||this.state.textPassWorld!=""||this.state.textName!=""||this.state.textPhone!=""){
      Alert.alert('Success: ','Đăng ký thành công!',
        [
          {text:'OK', onPress:()=> this.props.navigation.navigate('LoginScreen', params)}
        ])
    }else{
      Alert.alert('Error: ','Mời nhập đầy đủ thông tin');
    }
  }

  render() {
    var params={
      
      name: this.state.textEmail,
      passWorld: this.state.textPassWorld};

    return (
      <View style={{flex:1}}>
        <View style={{flex:1.4, backgroundColor:'#42a1f4', justifyContent:'flex-end'}}>
          <Image source={require('../icon/image.png')} style={{margin:10,height:80, width:80}}></Image>
        </View>

        <View style={{flex:2.5,justifyContent:'center'}}>
          <Text style={styles.title}>Thông tin cơ bản</Text>
          <TextInput 
                    placeholder='Họ và tên'
                    style={styles.textInput}
                    onChangeText={(text)=> this.setState({textName: text})}/>
          <TextInput
                    placeholder='Email'
                    style={styles.textInput}
                    onChangeText={(text)=> this.setState({textEmail: text})}/>
   

          <Text style={styles.title}>Thông tin riêng tư</Text>
          <TextInput
                    placeholder='Mật khẩu'
                    style={styles.textInput}
                    secureTextEntry={true}
                    onChangeText={(text)=> this.setState({textPassWorld: text})}>
          </TextInput>

          <TextInput
                    placeholder='Số điện thoại'
                    style={styles.textInput}
                    onChangeText={(text)=> this.setState({textPhone: text})}>
          </TextInput>

        </View>

        <View style={{flex:1,}}>

          <TouchableOpacity onPress={()=>{
            this.onRegiter(params);
          }}>
            <View style={styles.buttonRegiter}>
              <Text style={{color:'white',fontSize:15}}>Đăng ký</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
            <Text style={{color:'#42a1f4',fontSize:15, alignSelf:'center', marginTop:15}}>Tôi đã có tài khoản</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  textInput:{
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    borderBottomColor: '#42a1f4',
    borderBottomWidth: 1,
    fontSize: 18,
    padding: 5,
  },
  buttonRegiter:{
    alignItems:'center',
        backgroundColor:'#42a1f4',
        marginLeft:35,
        marginRight:35,
        marginTop:30,
        borderRadius: 20,
        height:37,
        justifyContent:'center'
  },
  title:{
    marginLeft:20,
    marginTop:20,
    color:'#42a1f4',
    fontWeight:'200',
    fontSize:20
  }
})