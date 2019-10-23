import * as actionTypes from '../actionTypes';

const initialState = {
    showRentInPeriod: false,
    rentAmountInPeriod : false,
    finalMembershipFee: false,
    postcode : "",
    validPostcode: false,
    flatBondCreated: false,
    flatBondError : false,
    loading: false,
}

//The Data is flatten here intentionally as other abstractions were over engineering for 2 fields
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
                postcode: action.postcode,
            }
        case actionTypes.IS_POSTCODE_VALID:
                return {
                    ...state,
                    validPostcode: action.isValid,
                }
        case actionTypes.CREATE_FLATBOND_REQUEST:
            return {
                ...state,
                loading : true,
            }
        case actionTypes.CREATE_FLATBOND_SUCCESS:
            return {
                ...state,
                flatBondCreated: true,
                loading : false,
            }
        case actionTypes.CREATE_FLATBOND_ERROR:
            return {
                ...state,
                flatBondError: action.error,
                loading : false,
            }       
        case actionTypes.RESET_FLATBOND:
            return initialState
        default:
            return state;
    }
}

export default reducer;