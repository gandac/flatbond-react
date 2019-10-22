import * as actionTypes from '../actionTypes';

export const updateFlatBondPeriod = (val) => {
    return {
        type: actionTypes.UPDATE_FLATBOND_PERIOD,
        period: val
    }
}
