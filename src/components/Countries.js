import React from 'react';
import CountriesFetch from './CountriesFetch';
import Container from '@material-ui/core/Container';

function Countries() {
        return (
            <Container maxWidth="lg">
                <div>
                    <CountriesFetch />
                </div>
           </Container>
          );
        }

export default Countries;
