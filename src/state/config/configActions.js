import * as actionTypes from '../actionTypes';
import apiCall from 'utils/api';

export const getConfig = () => {
    return dispatch => {
        dispatch(initConfig());
        apiCall.get( '/production/config' )
            .then( response => {
                dispatch(storeConfig(response.data))
            } )
            .catch( error => {
                dispatch(setConfigError(error))
            } );
    }
}

export const initConfig = () => {
    return {
        type: actionTypes.GET_CONFIG_REQUEST
    }
}

export const storeConfig = (data) => {
    return {
        type: actionTypes.GET_CONFIG_SUCCESS,
        data: data
    }
}

export const setConfigError = (error) => {
    return {
        type: actionTypes.GET_CONFIG_ERROR,
        error: error
    }
}
