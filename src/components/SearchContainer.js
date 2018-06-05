import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withTheme from '@material-ui/core/styles/withTheme'
import { Link } from 'react-router-dom';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
})

class SearchContainer extends React.Component {

  // componentDidMount() {
  //   const ourBarName = 'gab'.toUpperCase()
  //   const ourUrl = `https://api.mlab.com/api/1/databases/${process.env.REACT_APP_MLAB_DB}/collections/${process.env.REACT_APP_MLAB_COLLECTION}?apiKey=${process.env.REACT_APP_MLAB_KEY}&q={"locationName": { $regex: "${ourBarName}" }}`
  //   axios.get(ourUrl).then(response => {console.log(response.data)})
  // }

  state = {
    searchString: '',
    foundBarsData: [],
    foundBarsTotal: 0,
  }

  // rowClick(value) {
  //   console.log('row clicked');
  //   console.log(value);
  // }

  getBars(value) {
    console.log('get bars')
    const searchValue = value.toUpperCase()
    const ourUrl = `https://api.mlab.com/api/1/databases/${process.env.REACT_APP_MLAB_DB}/collections/${process.env.REACT_APP_MLAB_COLLECTION}?apiKey=${process.env.REACT_APP_MLAB_KEY}&q={"locationName": { $regex: "${searchValue}" }}`
    axios.get(ourUrl).then(response => {
      console.log(response.data)

      this.setState({
        searchString: searchValue,
        foundBarsData: response.data,
        foundBarsTotal: response.data.length,
      })
    })
  }

  render () {
    const { classes } = this.props
    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="full-width"
            label="Bar name"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Input bar name"
            helperText="ex. Malolam"
            fullWidth
            margin="normal"
            onChange={e => this.getBars(e.target.value)}
            value={this.state.value}
          />
        </form>
        <Typography variant="headline" gutterBottom>
          Found: {this.state.foundBarsTotal}
        </Typography>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.foundBarsData.map((n, index) => {
                return (
                  // <TableRow hover key={index} onClick={e => this.rowClick(index)}>
                  <TableRow hover key={index}>
                    <TableCell component="th" scope="row">
                      <Link to={`/report/${n.tabcPermitNumber}`}>{n.locationName}</Link>
                    </TableCell>
                    <TableCell>{n.locationAddress}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

SearchContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SearchContainer)
