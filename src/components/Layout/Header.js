import React from 'react';
import flatfairLogo from 'assets/logo.svg';
import {Link} from 'react-router-dom';
import {Grid,Container} from 'semantic-ui-react';

const Logo = (props) => {
    return <img src={flatfairLogo} alt="FlatBond Amazing App!"/>
}

export default (props) => {
    return (
        <header>
            <Container text>
                <Grid padded >
                    <Grid.Column>
                        <Link to="/">
                            <Logo />
                        </Link>
                    </Grid.Column>
                </Grid>
            </Container>
        </header>
    )
}