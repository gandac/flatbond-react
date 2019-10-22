

import {createStore, applyMiddleware , compose , combineReducers} from 'redux';
import configReducer from './config/configReducer'; 
import flatBondReducer from './flatbond/flatbondReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    config: configReducer,
    flatBond: flatBondReducer,
})

export default createStore(rootReducer, composeEnhancers());

