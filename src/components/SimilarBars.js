import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import numeral from 'numeral'
import moment from 'moment'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 200,
  },
});

function SimilarBars(props) {
  const { classes } = props;
  // console.log(moment().subtract(12, 'months'));
  // var lengthOfDataMinusTwelve = props.data.length - 12
  // console.log(lengthOfDataMinusTwelve);

  return (
    <div>
    <h4>Similar Bars</h4>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.similarBarsData.map((n, index, array) => {
            return (
              <TableRow hover key={index}>
                <TableCell component="th" scope="row"><a href={`/report/${n.tabcno}`}>{n.name}</a></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  </div>
  );
}

SimilarBars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimilarBars);
