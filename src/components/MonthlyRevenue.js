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

function MonthlyRevenue(props) {
  const { classes } = props;
  // console.log(moment().subtract(12, 'months'));
  var lengthOfDataMinusTwelve = props.data.length - 12
  // console.log(lengthOfDataMinusTwelve);

  return (
    <div>
    <h4>{props.barname} Last 12 Months</h4>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell numeric>Alcohol Revenue</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((n, index, array) => {
            if(index > lengthOfDataMinusTwelve){
                return (
                  <TableRow hover key={index}>
                    <TableCell component="th" scope="row">{moment(n.obligationEndDate, "YYYYMMDD").format('L')}</TableCell>
                    <TableCell numeric>{numeral(n.returnTotal).format('$0,0')}</TableCell>
                  </TableRow>
                );
            }
          })}
        </TableBody>
      </Table>
    </Paper>
  </div>
  );
}

MonthlyRevenue.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MonthlyRevenue);
