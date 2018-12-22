import Regiter from '../components/Regiter';
import Login from '../components/Login';
import MainScreen from '../components/HomeScreen';
import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';

export const AppStack=createStackNavigator({
    Login: Login,
    Regiter: Regiter,
    HomeScreen: MainScreen
},{
    headerMode:'none'
});

const Main=createStackNavigator({
    HomeScreen: MainScreen,
})

export const SwitchNavigator=createSwitchNavigator({
    Main,
    AppStack,
},{
    
})

export const Container=createAppContainer(SwitchNavigator);