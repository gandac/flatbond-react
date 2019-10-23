import * as actionTypes from '../actionTypes';
import * as CONST from '../constants';


// Business logic for the membership Fee
// This information will be used just as a reference. 
// The real math should be done on the server, where
// is not possible to tweak the values
export const calculateMembershipFee = (amount , state) => {

    if( !state.flatBond.showRentInPeriod || !amount ){
        return false
    }

    if( state.config.isFixedFee){
        return state.config.fixedFeeAmount;
    }
    //First we get here how much days are in the selected period
    const daysInPeriod = CONST.daysIsPeriod[state.flatBond.showRentInPeriod];
    
    //Import how much membership should cost in days ( 7 days config in business logic)
    const membershipRateToPeriod = daysInPeriod / CONST.MEMBERSHIP_COST_IN_DAYS;
 
    //Get the flexible membership value
    let flexibleMembershipFee = amount / membershipRateToPeriod;
    
    //Apply minimum Fee rule
    if ( flexibleMembershipFee < CONST.MIN_MEMBERSHIP_FEE_GBP ) {
        flexibleMembershipFee = CONST.MIN_MEMBERSHIP_FEE_GBP
    }

    //Lastly Apply VAT 20% and return the amount
    return CONST.applyVat(flexibleMembershipFee);
}

export const processAmount = (val) =>{
    return (dispatch , getState) => {
        const state = getState();
        const membership_fee = calculateMembershipFee(val, state);
        dispatch(setMembershipFee(membership_fee));
        dispatch(updateFlatBondAmount(val))
    }
}

export const validatePostcode = (val) =>{
    let postcode = val.replace(/\s/g, "");
    const regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
    return regex.test(postcode);
}

//Below we functions just to store in redux all the types info associated with a flatbond.

export const updateFlatBondPeriod = (val) => {
    return {
        type: actionTypes.UPDATE_FLATBOND_PERIOD,
        period: val
    }
}

export const applyAndValidatePostcode= (val) => {
    return dispatch => {

        if ( validatePostcode(val)){
            dispatch(setPostcodeValid(true));
        }else{
            dispatch(setPostcodeValid(false));
        }

        dispatch(updatePostcode(val));
    }
}

export const updatePostcode = (val) => {
    return {
        type: actionTypes.UPDATE_FLATBOND_POSTCODE,
        postcode: val
    }
}

export const setPostcodeValid = (isValid) =>{
    return {
        type: actionTypes.IS_POSTCODE_VALID,
        isValid : isValid
    }
}

export const updateFlatBondAmount = (val) => {
    return {
        type: actionTypes.UPDATE_FLATBOND_AMOUNT,
        amount: val
    }
}

export const setMembershipFee = (amount) => {
    return {
        type: actionTypes.SET_MEMBERSHIP_FEE,
        amount: amount
    }
}

export const resetFlatBond = (error) => {
    return {
        type: actionTypes.RESET_FLATBOND,
        error: error
    }
}
