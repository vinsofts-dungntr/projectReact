import {createStore, applyMiddleware} from 'redux';
import {reducer} from '../redux/reducer/Reducer';
import thunk from 'redux-thunk';

const createStoreWithMidleWare = applyMiddleware(thunk)(createStore);

export const store = createStoreWithMidleWare(reducer);