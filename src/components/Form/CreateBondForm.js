import React from 'react';
import {Slider} from 'react-semantic-ui-range';
import classes from './CreateBondForm.scss';

export default (props) => {
    const settings = {
        start: 50,
        min: 20,
        max: 100,
        step: 1,
        onChange: props.onChange
        }

    return (
        <div className={classes.CreateBondForm}>
            <h1>Choose the amount</h1>
            <Slider value={props.value} color="red" settings={settings} />

        </div>
    )
}