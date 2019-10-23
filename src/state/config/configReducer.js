import * as actionTypes from '../actionTypes';

const initialState = {
    isFixedFee: null,
    fixedFeeAmount : null,
    loading: true,
    error: false
}
//Store each of the 3 states of the request [ request | success | error ]
// standard reducer
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
                isFixedFee: action.data.fixed_membership_fee,
                fixedFeeAmount : action.data.fixed_membership_fee_amount,
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