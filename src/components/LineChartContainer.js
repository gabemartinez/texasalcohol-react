import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import LineChartTools from '../components/LineChartTools'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  responsiveLineStyle: {
    height: '50px',
  }
})

const LineChartContainer = props => {
  const { classes } = props
  // console.log(props.data);

    return (
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              Line Chart
            </Grid>
            <Grid item xs={12} sm={6}>
              <LineChartTools />
            </Grid>
          </Grid>
        </div>
    )
}

LineChartContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LineChartContainer)
