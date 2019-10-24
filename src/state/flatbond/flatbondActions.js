import * as actionTypes from '../actionTypes';
import * as CONST from '../constants';
import apiCall from 'utils/api';

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

    //Lastly Apply VAT 20% , maximum 2 fractional digits, and return the amount
    return Number.parseFloat(CONST.applyVat(flexibleMembershipFee)).toFixed(2);
}

// CreateFlatBond responsible to make the POST API Call , and change the page if it was successfull.
// Doesn't need any paramter as it will get the validated data from the Redux state
export const createFlatBond = () => {
    return (dispatch,getState) => {

        const state = getState();

        //Starting Request
        dispatch(createFlatBondStart());

        //Here we can see the flaw, as we sent the rent_input but we don't send the period in which we calculate the rent_input
        const formData = {
            rent_input : state.flatBond.rentAmountInPeriod,
            postcode : state.flatBond.postcode
        }

        apiCall.post( '/production/flatbond' , formData )
            .then( response => {
                //We need to make sure that the server will respond with status:created on 200 [ as promised ]
                if(response.data && response.data.status){
                    dispatch(createFlatBondSuccess())
                }
            } )
            .catch( error => {
                dispatch(createFlatBondError(error))
            } );
    }
}

// Before we store the amount from the view, we need to do wrap some business logic (Process the amount)
// We dispatch two different actions to store 1. The Amount in the slider, 2. The resulted Fee 
export const processAmount = (val) =>{
    return (dispatch , getState) => {
        const state = getState();
        const membership_fee = calculateMembershipFee(val, state);
        dispatch(setMembershipFee(membership_fee));
        dispatch(updateFlatBondAmount(val))
    }
}

// Validate the Postcode from gov UK. Easy peasy. 
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
       dispatch(setPostcodeValid(validatePostcode(val)));
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


export const createFlatBondStart = () => {
    return {
        type: actionTypes.CREATE_FLATBOND_REQUEST
    }
}

export const createFlatBondSuccess = (status) => {
    return {
        type: actionTypes.CREATE_FLATBOND_SUCCESS,
        status: status
    }
}

export const createFlatBondError = (error) => {
    return {
        type: actionTypes.CREATE_FLATBOND_ERROR,
        error: error
    }
}
