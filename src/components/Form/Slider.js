import React from 'react';
import InputRange from 'react-input-range';
import {Grid} from 'semantic-ui-react';
import {CURRENCY} from 'state/constants';

export default (props) => (
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
)
    