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

    if( state.config.is_fixed_fee){
        return state.config.fixed_fee_amount
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

//implement all the types to store the info associated with a flatbond.

export const processAmount = (val) =>{
    return (dispatch , getState) => {
        const state = getState();
        const membership_fee = calculateMembershipFee(val, state);
        dispatch(setMembershipFee(membership_fee));
        dispatch(updateFlatBondAmount(val))
    }
}

export const updateFlatBondPeriod = (val) => {
    return {
        type: actionTypes.UPDATE_FLATBOND_PERIOD,
        period: val
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
