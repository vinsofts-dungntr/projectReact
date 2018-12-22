/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import React, {Component} from 'react';

const oldState={value: 10, changeColor: false};

const reducers= (state = oldState, action)=>{
   if(action.type==='UP'){
       return {value: state.value+1, changeColor: state.changeColor};
   }
   if(action.type==='DOWN'){
       return {value: state.value-1, changeColor: state.changeColor};
   }
   if(action.type==='CHANGE_COLOR'){
       return{
           value: state.value, changeColor: !state.changeColor
       }
   }
    return state;
}

let store = createStore(reducers);

export default class ReduxDemo extends Component{
    render(){
        return(
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => ReduxDemo);
