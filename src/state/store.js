

import {createStore, applyMiddleware , compose , combineReducers} from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    // config : configurationsReducer,
    // flatBond: flatBondReducer,
})
export default createStore(rootReducer, composeEnhancers());

