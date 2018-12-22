import {combineReducers} from 'redux';
import {toogle} from './ToogleReducer';
import {toogleButton} from './ToogleButton';

export const reducers = combineReducers({
    toogle,
    toogleButton
})