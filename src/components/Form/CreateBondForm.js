import React from 'react';
import PropTypes from 'prop-types';
import {Input,Divider} from 'semantic-ui-react';
import Slider from './Slider';
import {CURRENCY} from 'state/constants';
import './CreateBondForm.scss';



const CreateBondForm =  (props) => {
    return (
        <div className={"CreateBondForm"}>
            <h1>Target the ideal home</h1>
            <p>Slide to find your desired {props.selectedPeriod} price and select the ideal area</p>

            <Slider {...props} />

            <h3>Enter the postcode for your next FlatBond</h3>
            <Input placeholder="N22 7XQ" type="text" maxLength="8" value={props.postcodeValue} onChange={(e) => props.postcodeChange(e)}/>
            
            <Divider />

            <h3 className="thin">You are entitled with a <strong className="highlight-text">{props.membership.type}</strong> membership <br/>
             It will cost you exactly: {CURRENCY}{props.membership.amount} </h3>
            <p>Please send this order to lock it, and assure you will get this price exclusively.</p>
        </div>
    )
}
// eslint-disable-next-line 
CreateBondForm.propTypes = {
    selectedPeriod: PropTypes.string,
    postcodeChange: PropTypes.func,
    postcodeValue: PropTypes.string,
    membership: PropTypes.shape({
        type: PropTypes.string,
        amount: PropTypes.number
    })
}
export default CreateBondForm;