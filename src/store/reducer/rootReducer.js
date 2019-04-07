import loadReducer from './loadReducer'
import {combineReducers} from 'redux'


const rootReducer = combineReducers({
    load: loadReducer
});

export default rootReducer