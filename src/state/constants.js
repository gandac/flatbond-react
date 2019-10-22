// Declare here all the bussiness logic "constants"
export const API_BASE                 = "https://cxynbjn3wf.execute-api.eu-west-2.amazonaws.com"
export const WEEKLY_MIN_RENT_GBP      = 25
export const WEEKLY_MAX_RENT_GBP      = 2000
export const MONTHLY_MIN_RENT_GBP      = 110
export const MONTHLY_MAX_RENT_GBP      = 8660
export const MIN_MEMBERSHIP_FEE_GBP   = 120
export const VAT_PERCENT              = 20
export const MEMBERSHIP_COST_IN_DAYS  = 7


// Model the data from above treasures 

export const sliderLimits = {
    weekly : {
        min : WEEKLY_MIN_RENT_GBP,
        max: WEEKLY_MAX_RENT_GBP
    },
    monthly: {
        min: MONTHLY_MIN_RENT_GBP,
        max: MONTHLY_MAX_RENT_GBP
    }
}

export const applyVat = VAT_PERCENT / 100 ;
