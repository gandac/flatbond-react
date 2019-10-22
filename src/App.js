import React from 'react';
import {  withRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import routes from './mainRouter';
import './App.css';

function App() {
  return (
      <Layout>
        {routes}
      </Layout>
  );
}
export default withRouter(App);
