import {createStore} from 'redux';
import reducer from '../reducers/mainReducer';

//connecting reducer to store
let store = createStore(reducer);

export default store;