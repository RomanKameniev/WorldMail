
import React from 'react';
import { render } from 'react-dom';

import { ApolloProvider } from '@apollo/react-hooks';

import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";

import App from './App';
require('dotenv').config()

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

// or you can use `import gql from 'graphql-tag';` instead


/*client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));
*/
const Container = () => 
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider >



/* jshint expr: true */
render(<Container />, document.getElementById('root'));