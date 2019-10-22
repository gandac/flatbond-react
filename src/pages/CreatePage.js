import React from 'react';
import {connect} from 'react-redux';
import {Segment,Divider,Container,Grid} from 'semantic-ui-react';
import ChooseRentPeriod from 'components/Form/ChoosePeriod';
import CreateBondForm from 'components/Form/CreateBondForm';
import * as actions from 'state/flatbond/flatbondActions';
import classes from './page.scss';

class CreatePage extends React.Component{

   
    componentDidMount(){
        //The initial call to when we ger the config 
        // this.props.resetForm();
        // this.props.getConfig(); 
    }

    resetPageState = () => {
        
        //this.props.resetForm();
    }

    handeRadioValue = (e, { value }) => this.props.updatePeriod(value)

    handlePriceSlide = (value) =>  {
        
        console.log('value' , value)
    };
    
    render(){
        return (
            <Container className={classes.Page}>
                <Grid columns={2}>
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
                    <Grid.Column>
                    {
                    this.props.rentPeriod ? 
                        <Segment raised>
                            <CreateBondForm 
                              selectedPeriod={this.props.rentPeriod}
                            //   value={this.props.value}
                              onChange={this.handlePriceSlide}/>
                        </Segment>
                    : null
                    }
                    </Grid.Column>
                </Grid>
               

            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        rentPeriod : state.flatBond.showRentInPeriod
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updatePeriod : (val) => dispatch(actions.updateFlatBondPeriod(val))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreatePage);