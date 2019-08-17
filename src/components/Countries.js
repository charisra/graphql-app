import React, { Component } from 'react';
import CountriesFetch from './CountriesFetch';
import Container from '@material-ui/core/Container';

class Countries extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Container maxWidth="lg">
                <div>
                    <CountriesFetch />
                </div>
           </Container>
          );
        }
    }

export default Countries;
