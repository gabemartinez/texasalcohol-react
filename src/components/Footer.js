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

function Footer(props) {
  const { classes } = props
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography component="p">
          Texas Mixed Bev Analytics
        </Typography>
      </Paper>
    </div>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Footer)
