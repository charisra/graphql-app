import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Countries from './components/Countries';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import SingleCountry from './components/SingleCountry';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com'
});

function App() {
  return (
      <ApolloProvider client={client}>
        <Router>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/countries/" component={Countries} />
          <Route path={`/countries/:id`} component={SingleCountry}/>
        </div>
        </Router>
      </ApolloProvider>
  );
}

export default App;
