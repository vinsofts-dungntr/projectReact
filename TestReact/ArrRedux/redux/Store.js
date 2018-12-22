import {createStore} from 'redux';
import {reducer} from './reducer/CombineReducer';

export const store=createStore(reducer);

