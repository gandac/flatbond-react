import * as actionTypes from '../actionTypes';

const initalState = {
    showRentInPeriod: false,
    rentAmountInPeriod : false,
    finalMembershipFee: false,
    flatPostCode : false,
    bondSubmit : false 
}

const reducer = (state = initalState ,action) => {
    switch(action.type){
        case actionTypes.UPDATE_FLATBOND_PERIOD:
            return {
                ...state,
                showRentInPeriod: action.period,
            }
        case actionTypes.UPDATE_FLATBOND_VALUE:
            return {
                ...state,
                rentAmountInPeriod: action.value,
            }
        case actionTypes.CALCULATE_MEMBERSHIP_FEE:
            return {
                ...state,
                finalMembershipFee: action.fee_amount,
            }
        case actionTypes.UPDATE_FLATBOND_POSTCODE:
            return {
                ...state,
                flatPostCode: action.postcode,
            }
        default:
            return state;
    }
}

export default reducer;