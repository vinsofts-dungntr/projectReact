import {createStackNavigator, createAppContainer } from 'react-navigation';
import Regiter from '../components/Regiter';
import Login from '../components/LoginScreen';

export const StackNavigate=createStackNavigator({
    LoginScreen:{screen: Login},
    RegiterScreen:{screen: Regiter},
    
    
},{
    headerMode:'none',
    
});

export const Container=createAppContainer(StackNavigate);