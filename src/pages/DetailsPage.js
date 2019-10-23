import React from 'react';
import {connect} from 'react-redux';
import {Segment,Table,Container,Button} from 'semantic-ui-react';
import {CURRENCY} from 'state/constants';
import GridContainer from 'components/ui/GridContainer';
import Preloader from 'components/ui/Preloader';

class DetailsPage extends React.Component{
    render(){
        return (
            this.props.loading ?  <GridContainer> <Preloader /> </GridContainer>:
                <Container text className="detailsPage">
                    <Segment>
                        <h1>Your FlatBond is created</h1>
                        <p>Congratulations! You've just bound to a new flat. Below are all the details you need to know</p><br/>
                        <Table>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                       <p><strong>Location</strong></p>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <p>Postcode: {this.props.postcode}</p>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                      <p><strong>Rent Costs</strong></p>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <p>You have to pay <strong>{this.props.rentPeriod}</strong> a total rent of <strong>{CURRENCY}{this.props.rentAmount}</strong></p>
                                        <p><small>* VAT Included</small></p>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                       <strong>Membership Fee</strong>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <p>You have been granted a {this.props.membershipType} membership, with a total cost of <strong>{CURRENCY}{this.props.membershipFee}</strong></p>
                                        <p><small>* VAT Included</small></p>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        <p>Thank you for using our [ demo ] service, click below to go back </p>
                    </Segment>
                    <Button positive onClick={() => this.props.history.push('/')}>Back to FlatBond </Button>
                </Container>
                
        )
    }
}
const mapStateToProps = state => {
    return {
        rentAmount     : state.flatBond.rentAmountInPeriod,
        rentPeriod     : state.flatBond.showRentInPeriod,
        postcode       : state.flatBond.postcode,
        loading        : state.flatBond.loading,
        membershipType : state.config.isFixedFee ? "fixed" : "flexible",
        membershipFee  : state.flatBond.finalMembershipFee
    }
}
export default connect(mapStateToProps)(DetailsPage);