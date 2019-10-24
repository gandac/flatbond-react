import React from 'react';
import InputRange from 'react-input-range';
import PropTypes from 'prop-types'
import {Grid} from 'semantic-ui-react';
import {CURRENCY} from 'state/constants';

const Slider = (props) => (
    <Grid className="sliderWrapper">
        <Grid.Row> 
            <Grid.Column>
            <InputRange
            minValue={props.sliderMin}
            maxValue={props.sliderMax}
            value={props.amount}
            onChange={value => props.onChange(value)}
            formatLabel={val => `${CURRENCY}${val}`}
                />
            </Grid.Column> 
        </Grid.Row>
    </Grid>
);

Slider.propTypes = {
    sliderMin: PropTypes.number,
    sliderMax: PropTypes.number,
    amount: PropTypes.number,
    onChange: PropTypes.func
}

export default Slider;
    