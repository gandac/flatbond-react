

import {createStore, applyMiddleware , compose , combineReducers} from 'redux';
import configReducer from './config/configReducer'; 
import flatbondReducer from './flatbond/flatbondReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    config : configReducer,
    flatBond: flatbondReducer,
})

export default createStore(rootReducer, composeEnhancers());

