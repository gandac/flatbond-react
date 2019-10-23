import React from 'react';
import {  withRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import routes from './mainRouter';
import './App.css';

// App Wrapper
// Here we would wrap with other Higher Order rules for our pages
function App() {
  return (
      <Layout>
        {routes}
      </Layout>
  );
}
export default withRouter(App);
