import React from 'react';
import {Table} from 'semantic-ui-react';
import {Slider} from 'react-semantic-ui-range';
import {sliderLimits} from 'state/constants';
import classes from './CreateBondForm.scss';


export default (props) => {
    const min = sliderLimits[props.selectedPeriod].min;
    const max = sliderLimits[props.selectedPeriod].max;
    const settings = {
        start: Math.floor(max / 2),
        min: min,
        max: max,
        step: 1,
        color:"blue",
        onChange: value => props.onChange(value)
        }

    return (
        <div className={classes.CreateBondForm}>
            <h1>Choose the target for your own rent</h1>
            
            <Table basic='very'>
                <Table.Body>
                <Table.Row>
                    <Table.Cell>
                       
                    </Table.Cell>
                    <Table.Cell>
                        <Slider value={props.value} color="blue" settings={settings} />
                    </Table.Cell>
                    <Table.Cell>
                        
                    </Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}