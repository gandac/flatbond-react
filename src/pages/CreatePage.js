import React from 'react';
import {connect} from 'react-redux';
import {Segment,Divider,Container,Grid,Button} from 'semantic-ui-react';
import Preloader from 'components/ui/Preloader';
import ChooseRentPeriod from 'components/Form/ChoosePeriod';
import CreateBondForm from 'components/Form/CreateBondForm';
import * as actions from 'state/flatbond/flatbondActions';
import {getConfig} from 'state/config/configActions';
import {sliderLimits} from 'state/constants';
import GridContainer from 'components/ui/GridContainer';
import './page.scss';

class CreatePage extends React.Component{

    componentWillReceiveProps(nextProps){
        if(nextProps.bondIsCreated){
            this.props.history.push('/details');
        }
    }
    componentDidMount(){
        this.resetPageState();
    }

    // Will reset each reducer to the initial state. 
    resetPageState = () => {
        this.props.resetForm();
        this.props.getConfig(); 
    }

    // All the Event Handles for the Create Page are authored below
    handeRadioValue = (e, { value }) => {
        this.props.updatePeriod(value);
        this.props.updateRentAmount(sliderLimits[value].start);
    }

    handlePriceSlide = (value) =>  this.props.updateRentAmount(value)
    
    postcodeChange = (e) => { 
        const val = e.target.value;
        this.props.updatePostcode(val);
    }

    submitData = () => {
        this.props.createFlatBond();
    }

    render(){

        const sliderMin = this.props.rentPeriod ? sliderLimits[this.props.rentPeriod].min : 0;
        const sliderMax = this.props.rentPeriod ? sliderLimits[this.props.rentPeriod].max : 0;

        return (
            this.props.loading ?  <GridContainer> <Preloader /> </GridContainer>:
            <Container className="Page">
                <Grid columns={2}>
                    
                    <Grid.Row>
                        <Grid.Column >
                            <Segment>
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
                            <Segment>
                                <CreateBondForm 
                                membership = {this.props.membership}
                                selectedPeriod={this.props.rentPeriod}
                                amount={this.props.rentAmount}
                                onChange={this.handlePriceSlide}
                                sliderMin ={sliderMin}
                                sliderMax ={sliderMax}
                                postcodeValue = {this.props.postcode}
                                postcodeChange = {this.postcodeChange}
                                validPostcode = {this.props.isValidPostcode}
                                />
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    : null }
                    
                    <Grid.Row>
                        <Grid.Column className="right aligned">
                            { this.props.isValidPostcode ? 
                            <Button positive onClick={this.submitData}>Send</Button>
                            : this.props.rentPeriod ? <p>Please fill in a valid Postcode above</p> : null }
                        </Grid.Column>
                    </Grid.Row>
             
                   
                </Grid>
               

            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        rentPeriod : state.flatBond.showRentInPeriod,
        rentAmount : state.flatBond.rentAmountInPeriod,
        isValidPostcode : state.flatBond.validPostcode,
        postcode : state.flatBond.postcode,
        loading: state.config.loading || state.flatBond.loading ,
        bondIsCreated : state.flatBond.flatBondCreated,
        membership : {
            type: state.config.isFixedFee ? "fixed" : "flexible",
            amount: state.flatBond.finalMembershipFee
        }
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updatePeriod       : (val) => dispatch(actions.updateFlatBondPeriod(val)),
        updateRentAmount   : (val) => dispatch(actions.processAmount(val)),
        updatePostcode     : (val) => dispatch(actions.applyAndValidatePostcode(val)),
        resetForm          : () => dispatch(actions.resetFlatBond()),
        createFlatBond     : () => dispatch(actions.createFlatBond()),
        getConfig          : () => dispatch(getConfig()),

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreatePage);