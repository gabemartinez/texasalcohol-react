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
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
})

const ReportContainer = (props) => {
  const { classes, match } = props
    return (
        <div>
          <Paper className={classes.root} elevation={4}>
            <h3>TABC Permit Number: {match.params.reportId}</h3>
              <Grid item xs={12} sm={6}>
                  <BarName barname={props.barname} locationAddress={props.locationAddress} tabcPermitNumber={props.tabcPermitNumber} />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <RanksBasedOnSales />
              </Grid>
              <Grid item xs={12} sm={12}>
                  <LineChartContainer data={props.data} />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <MonthlyRevenue />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Summary />
              </Grid>
              <Grid item xs={12} sm={12}>
                  <SimilarBars />
              </Grid>
          </Paper>
        </div>
    )
}

ReportContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ReportContainer)
