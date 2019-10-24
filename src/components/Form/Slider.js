import React from 'react';
import InputRange from 'react-input-range';
import PropTypes from 'prop-types'
import {Grid} from 'semantic-ui-react';
import {CURRENCY} from 'state/constants';

// eslint-disable-next-line 
Slider.propTypes = {
    sliderMin: PropTypes.number,
    sliderMax: PropTypes.number,
    amount: PropTypes.number,
    onChange: PropTypes.func
}

const Slider = (props) => (
    <Grid >
        <Grid.Row> 
            <Grid.Column width={13}>
            <InputRange
            minValue={props.sliderMin}
            maxValue={props.sliderMax}
            value={props.amount}
            onChange={value => props.onChange(value)}
                />
            </Grid.Column>  
            <Grid.Column width={3}>
                {CURRENCY}{props.amount}
            </Grid.Column>
        </Grid.Row>
    </Grid>
);
export default Slider;
    