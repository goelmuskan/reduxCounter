import counterReducers from "./counter";

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter : counterReducers,
    
});
export default allReducers;