import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  buttonStyles: {
    marginRight: 10
  }
}

function Header(props) {
  const { classes, styles } = props
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="default" align="left" className={classes.flex}>
            <a href="/">Texas Mixed Bev Analytics</a>
          </Typography>
          <Button href="/" variant="outlined" color="default" className={classes.buttonStyles}>Home</Button>
          <Button href="/search" variant="outlined" color="default">Search</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
