import React from 'react';
import {connect} from 'react-redux';
import {Segment,Divider,Container,Grid} from 'semantic-ui-react';
import ChooseRentPeriod from 'components/Form/ChoosePeriod';
import CreateBondForm from 'components/Form/CreateBondForm';
import * as actions from 'state/flatbond/flatbondActions';
import {getConfig} from 'state/config/configActions';
import {sliderLimits} from 'state/constants';
import './page.scss';

class CreatePage extends React.Component{

   
    componentDidMount(){
        this.resetPageState();
    }

    shouldComponentUpdate(nextProps , nextState){
        if(this.props.rentPeriod !== nextProps.propsRentPeriod )
            return true
    }

    resetPageState = () => {
        this.props.resetForm();
        this.props.getConfig(); 
    }

    handeRadioValue = (e, { value }) => {
        this.props.updatePeriod(value);
        this.props.updateRentAmount(sliderLimits[value].start);
    }

    handlePriceSlide = (value) =>  this.props.updateRentAmount(value)
    
    render(){
        const sliderMin = this.props.rentPeriod ? sliderLimits[this.props.rentPeriod].min : 0;
        const sliderMax = this.props.rentPeriod ? sliderLimits[this.props.rentPeriod].max : 0;
        return (
            <Container className="Page">
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column >
                            <Segment raised>
                                <h1 className={"text-center"}>Get your perfect Flat Bond</h1>
                                <p>Find how much your membership costs, and apply to set your next flat bond</p>
                                <Divider />
                                <ChooseRentPeriod
                                value={this.props.rentPeriod}
                                handleValue={this.handeRadioValue}  />
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    { this.props.rentPeriod ? 
                    <Grid.Row>
                        <Grid.Column>
                            <Segment raised>
                                <CreateBondForm 
                                membership = {this.props.membership}
                                selectedPeriod={this.props.rentPeriod}
                                amount={this.props.rentAmount}
                                onChange={this.handlePriceSlide}
                                sliderMin ={sliderMin}
                                sliderMax ={sliderMax}
                                />
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    : null }
                   
                </Grid>
               

            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        rentPeriod : state.flatBond.showRentInPeriod,
        rentAmount : state.flatBond.rentAmountInPeriod,
        membership : {
            type: state.flatBond.is_fixed_fee ? "fixed" : "flexible",
            amount: state.flatBond.finalMembershipFee
        }
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updatePeriod       : (val) => dispatch(actions.updateFlatBondPeriod(val)),
        updateRentAmount   : (val) => dispatch(actions.processAmount(val)),
        resetForm          : () => dispatch(actions.resetFlatBond()),
        getConfig          : () => dispatch(getConfig()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreatePage);