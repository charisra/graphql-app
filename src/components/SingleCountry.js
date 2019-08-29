import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    button: {
        margin: theme.spacing(1),
      },
      input: {
        display: 'none',
      },
  }));

function SingleCountry(props) {
    const classes = useStyles();
    const { loading, error, data } = useQuery(gql `
    query SingleCountry {
        country(code:"${props.match.params.id}") {
            name
            currency
            phone
          }
    }
`);

if (loading) return <h4>Loading...</h4>
if (error) console.log(error);
console.log(data)

        return (
            <Container maxWidth="lg">
                <Link to="/">
                <Button variant="contained" color="primary" className={classes.button}>
                  Home
                </Button>
              </Link>
              {data.country !== null ? 
              <div style={{marginTop:10}}>
              <Card className={classes.card}>
              <CardContent>
                  <Typography variant="h5" component="h2">
                  {data.country.name}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                  Currency: {data.country.currency}
                  </Typography>
                  <Typography variant="body2" component="p">
                  Area Code (phone): {data.country.phone}
                  <br />
                  </Typography>
              </CardContent>
              </Card>
              </div>
              :
              <h3>No countries found</h3>
              }
                
           </Container>
          );
        }

export default SingleCountry;
