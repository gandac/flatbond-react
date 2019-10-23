import React from 'react';
import {Container, Grid} from 'semantic-ui-react';

const GridContainer = (props) => {
    return (
        <Container className="Page">
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column style={{'minHeight': '400px'}} >
                    {props.children}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default GridContainer;
