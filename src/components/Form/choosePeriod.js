import React from 'react';
import {Radio} from 'semantic-ui-react';
import './ChoosePeriod.scss';

export default (props) => {
    return(
    <div className={"ChoosePeriod"}>
        <h3>How do you calcualte your rent?</h3>
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