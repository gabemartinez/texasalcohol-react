import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
})

function LineChartTools(props) {
  // const { classes } = props
  return (
    <Grid container spacing={8}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        Line chart toggles and tools.
      </Grid>
    </Grid>
  )
}

LineChartTools.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LineChartTools)
