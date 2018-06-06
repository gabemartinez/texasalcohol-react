import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
// import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
})

function LineChartTools(props) {
  // const { classes } = props
  return (
    <div>
        <Typography component="p">
          Line chart toggles and tools.
        </Typography>
    </div>
  )
}

LineChartTools.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LineChartTools)
