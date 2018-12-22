
import {FETCH_API, FETCH_ERROR, FETCH_SUCCESS} from '../action/Action';

const oldState={
    isFetching: true,
    contacts: [],
    errorMessage: ''
}

export const reducer=(state = oldState, action)=>{
    switch(action.type){
        case FETCH_API:{
            return {...state, isFetching: true}
        }
        case FETCH_SUCCESS:{
            return { ...state, contacts: action.paload, isFetching: false}
        }
        case FETCH_ERROR:{
            return{...state, errorMessage: action.paload, isFetching: false}
        }
        default:
            return state;
    }
}