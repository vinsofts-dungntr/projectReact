
import {combineReducers} from 'redux';
import {toogleAdd} from './Toogle';
import {arrWords} from './Array';
import {filterShow} from './ReduShowAll';

export const reducer=combineReducers({
    arrWords: arrWords,
    status: filterShow,
    isAdd: toogleAdd,
})
