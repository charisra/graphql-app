import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  }));

function CountriesFetch() {
    const classes = useStyles();
    const { loading, error, data } = useQuery(gql `
    query CountriesQuery {
        countries {
            name,
            continent{
              name
            }
            languages {
              name,
              native
            }
          }
    }
`);

if (loading) return <h4>Loading...</h4>
if (error) console.log(error);

        return(
            <div>
               <Link to="/">
                <Button variant="contained" color="primary" className={classes.button}>
                  Home
                </Button>
              </Link>
                <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                    <TableRow>
                        <TableCell style={{minWidth:100, maxWidth:100}}>Name</TableCell>
                        <TableCell align="left" style={{minWidth:100, maxWidth:100}}>Languages</TableCell>
                        <TableCell align="left" style={{minWidth:200, maxWidth:200}}>Native</TableCell>
                        <TableCell align="left" style={{minWidth:100, maxWidth:100}}>Continent</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.countries.map(({ name, continent, languages }) => (
                        <TableRow key={name}>
                          <TableCell style={{minWidth:100, maxWidth:100}}>{name}
                          </TableCell>
                          {{languages}.languages.length > 0 ?
                          <TableCell align="left" style={{minWidth:100, maxWidth:150}}>
                              {{languages}.languages.map(r => r.name) + ' ' }
                          </TableCell>
                              : 
                          <TableCell align="left" style={{minWidth:100, maxWidth:100}}>None
                          </TableCell>}
                          {{languages}.languages.length > 0 ?
                          <TableCell align="left" style={{minWidth:200, maxWidth:200}}>
                              {{languages}.languages.map(r => r.native) + ' ' }
                          </TableCell>
                          : 
                          <TableCell align="left" style={{minWidth:200, maxWidth:200}}>None
                          </TableCell>}
                          <TableCell align="left" style={{minWidth:100, maxWidth:100}}>{{continent}.continent.name}
                          </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </Paper>
            </div>    
        )     
        }

export default CountriesFetch;