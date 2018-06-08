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
        <Typography variant="headline" component="h3">
          HOME CONTAINER
        </Typography>
        <Typography component="p">
          Some home content goes here. What is this about? Who are we?
        </Typography>
        <Typography component="p">
          How to contact us
        </Typography>
      </Paper>
    </div>
  )
}

HomeContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HomeContainer)
