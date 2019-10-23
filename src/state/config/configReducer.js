import * as actionTypes from '../actionTypes';

const initialState = {
    is_fixed_fee: null,
    fixed_fee_amount : null,
    loading: true,
    error: false
}
//STORE EACH OF THE 3 STATES OF THE REQUEST
const reducer = (state = initialState ,action) => {
    switch(action.type){
        case actionTypes.GET_CONFIG_REQUEST:
        return {
            ...state,
            loading: true
        }
        case actionTypes.GET_CONFIG_SUCCESS:
            return {
                ...state,
                is_fixed_fee: false,
                fixed_fee_amount : action.data.fixed_membership_fee_amount,
                loading: false
            }
        case actionTypes.GET_CONFIG_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actionTypes.RESET_CONFIG:
                return initialState
        default:
            return state;
    }
}

export default reducer;