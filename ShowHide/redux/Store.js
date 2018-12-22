import {createStore} from 'redux';
import {reducers} from '../redux/reducers/CombineReducer';

export const store=createStore(reducers);