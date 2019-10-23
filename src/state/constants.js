// Declare here all the bussineses "constants"
export const BASE_API_URL             = "https://cxynbjn3wf.execute-api.eu-west-2.amazonaws.com"
export const WEEKLY_MIN_RENT_GBP      = 25
export const WEEKLY_MAX_RENT_GBP      = 2000
export const MONTHLY_MIN_RENT_GBP     = 110
export const MONTHLY_MAX_RENT_GBP     = 8660
export const MIN_MEMBERSHIP_FEE_GBP   = 120
export const VAT_PERCENT              = 20
export const MEMBERSHIP_COST_IN_DAYS  = 7
export const CURRENCY                 = '£'

// Model the data from above treasures 
// We want the pointer to begin in the center of the slider [ start = max / 2 ]

export const sliderLimits = {
    weekly : {
        min : WEEKLY_MIN_RENT_GBP,
        max: WEEKLY_MAX_RENT_GBP,
        start: WEEKLY_MAX_RENT_GBP / 2
    },
    monthly: {  
        min: MONTHLY_MIN_RENT_GBP,
        max: MONTHLY_MAX_RENT_GBP,
        start: MONTHLY_MAX_RENT_GBP / 2
    }
}

export const daysIsPeriod = {
    weekly: 7,
    monthly: 30
}

//utility function to easily apply VAT rule
export const applyVat = (val) =>  val + val * VAT_PERCENT / 100 ;
