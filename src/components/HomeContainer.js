import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
})

function HomeContainer(props) {
  const { classes } = props
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography component="p">
          The Texas Mixed Bev Analytics application allows you to search and view bar and restaurants alcohol revenue. Click Search in the navigation to begin.
        </Typography>
      </Paper>
    </div>
  )
}

HomeContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HomeContainer)
