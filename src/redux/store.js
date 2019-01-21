import { createStore, combineReducers } from 'redux';
import results from './reducers/results';
import suggestions from './reducers/suggestions';


const reducer = combineReducers({
    results,
    suggestions,

});

const store = createStore(reducer);

export default store;
