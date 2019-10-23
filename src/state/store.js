

import {createStore, applyMiddleware , compose , combineReducers} from 'redux';
import configReducer from './config/configReducer'; 
import flatBondReducer from './flatbond/flatbondReducer';
import thunk from 'redux-thunk';

//Enable Redux in Dev-Tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Create the Store of Truth
const rootReducer = combineReducers({
    config: configReducer,
    flatBond: flatBondReducer,
})

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

