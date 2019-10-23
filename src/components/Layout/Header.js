import React from 'react';
import flatfairLogo from 'assets/logo.svg';
import {Grid} from 'semantic-ui-react';

const Logo = (props) => {
    return <img src={flatfairLogo} alt="FlatBond Amazing App!"/>
}

export default (props) => {
    return (
        <header>
            <Grid padded >
                <Grid.Column>
                    <Logo />
                </Grid.Column>
            </Grid>
        </header>
    )
}