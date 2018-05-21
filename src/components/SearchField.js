import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
})

const SearchField = props => {
  const { classes } = props
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="search"
          label="Search for a bar or restaurant"
          type="text"
          className={classes.textField}
          margin="dense"
          name="barname"
        />
        <Button variant="raised" className={classes.button}>Search</Button>
      </form>
    )
}

SearchField.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SearchField)
