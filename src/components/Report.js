import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import BarName from '../components/BarName'
import RanksBasedOnSales from '../components/RanksBasedOnSales'
import LineChartContainer from '../components/LineChartContainer'
import MonthlyRevenue from '../components/MonthlyRevenue'
import Summary from '../components/Summary'
import SimilarBars from '../components/SimilarBars'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

const Report = (props) => {
  const { classes } = props
    return (
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <BarName barname={props.barname} locationAddress={props.locationAddress} tabcPermitNumber={props.tabcPermitNumber} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <RanksBasedOnSales />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <LineChartContainer data={props.data} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <MonthlyRevenue />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Summary />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <SimilarBars />
              </Paper>
            </Grid>
          </Grid>
        </div>
    )
}

Report.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Report)
