import React from 'react';
import {Input,Grid,Divider} from 'semantic-ui-react';
import InputRange from 'react-input-range';

import {CURRENCY} from 'state/constants';
import './CreateBondForm.scss';

export default (props) => {
    
    return (
        <div className={"CreateBondForm"}>
            <h1>Target the ideal home</h1>
            <p>Slide to find your desired {props.selectedPeriod} price and select the ideal area</p>
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
            <h3>Enter postcode to your next FlatBond</h3>
            <Input placeholder="N22 7XQ" type="text" maxLength="8"/>
            <Divider />
            <h3 className="thin">You are entitled with a <strong>{props.membership.type}</strong> membership <br/> and will cost you exactly: {CURRENCY}{props.membership.amount} </h3>
            <p>Please send this order to lock it, and assure you will get this price exclusively.</p>
        </div>
    )
}