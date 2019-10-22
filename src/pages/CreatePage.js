import React from 'react';
import {connect} from 'react-redux';
import {Segment,Divider,Container,Grid} from 'semantic-ui-react';
import ChooseRentPeriod from 'components/Form/ChoosePeriod';
import CreateBondForm from 'components/Form/CreateBondForm';
import * as actions from 'state/flatbond/flatbondActions';
import classes from './page.scss';

class CreatePage extends React.Component{

    constructor(props) { 
        super(props);
        this.initialState = {
            calculateRentPeriod : false,
        }
        this.state = this.initialState;
    }
    
    

    componentDidMount(){
        //The initial call to when we ger the config 
        // this.props.resetForm();
        // this.props.getConfig(); 
    }

    resetPageState = () => {
        this.setState(this.initialState);
        //this.props.resetForm();
    }

    handeRadioValue = (e, { value }) => this.setState({ ...this.state, calculateRentPeriod: value })

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
                            value={this.state.calculateRentPeriod}
                            handleValue={this.handeRadioValue}  />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                    {
                    this.state.calculateRentPeriod ? 
                        <Segment raised>
                            <CreateBondForm 
                               />
                        </Segment>
                    : null
                    }
                    </Grid.Column>
                </Grid>
               

            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreatePage);