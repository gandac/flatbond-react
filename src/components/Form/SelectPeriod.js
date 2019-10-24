import React from 'react';
import PropTypes from 'prop-types'
import {Radio} from 'semantic-ui-react';
import './ChoosePeriod.scss';

const SelectPeriod = (props) => {
    return(
    <div className={"ChoosePeriod"}>
        <h3>How do you pay your rent?</h3>

            <span className="radioButtonWrapper">
                <Radio
                    label='Weekly'
                    name='choosePeriodRadio'
                    value='weekly'
                    checked={props.value === 'weekly'}
                    onChange={props.handleValue}
                /> 
            </span>
            <span className="radioButtonWrapper">
                <Radio
                label='Monthly'
                name='choosePeriodRadio'
                value='monthly'
                checked={props.value === 'monthly'}
                onChange={props.handleValue}
                />
            </span>

    </div>
    )
};

//Props for controlling radio buttons
SelectPeriod.propTypes = {
    value : PropTypes.string,
    handleValue: PropTypes.func
}

export default SelectPeriod;