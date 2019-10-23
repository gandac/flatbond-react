import * as actionTypes from '../actionTypes';

const initialState = {
    showRentInPeriod: false,
    rentAmountInPeriod : false,
    finalMembershipFee: false,
    flatPostCode : false,
    bondSubmit : false 
}

const reducer = (state = initialState ,action) => {
    switch(action.type){
        case actionTypes.UPDATE_FLATBOND_PERIOD:
            return {
                ...state,
                showRentInPeriod: action.period,
            }
        case actionTypes.UPDATE_FLATBOND_AMOUNT:
            return {
                ...state,
                rentAmountInPeriod: action.amount,
            }
        case actionTypes.SET_MEMBERSHIP_FEE:
            return {
                ...state,
                finalMembershipFee: action.amount,
            }
        case actionTypes.UPDATE_FLATBOND_POSTCODE:
            return {
                ...state,
                flatPostCode: action.postcode,
            }
        case actionTypes.RESET_FLATBOND:
            return initialState
        default:
            return state;
    }
}

export default reducer;