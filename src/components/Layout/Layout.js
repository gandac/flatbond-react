import React from 'react';
import { Container } from 'semantic-ui-react'
import  './Layout.scss';
import Header from './Header';

const Layout = (props) => {
    return (
        <Container >
            <Header />
            <main className={"mainContent"}>
                {props.children}
            </main>
        </Container>
    )
}

export default Layout;