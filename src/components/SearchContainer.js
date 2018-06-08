import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
// import withTheme from '@material-ui/core/styles/withTheme'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
})

class SearchContainer extends React.Component {

  state = {
    searchString: '',
    foundBarsData: null,
    foundBarsTotal: undefined,
  }

  getBars(value) {
    console.log('get bars ran')
    console.log(value)
    if (value.length > 2) {
      const searchValue = value.toUpperCase()
      const ourUrl = `https://api.mlab.com/api/1/databases/${process.env.REACT_APP_MLAB_DB}/collections/${process.env.REACT_APP_MLAB_COLLECTION}?apiKey=${process.env.REACT_APP_MLAB_KEY}&q={"locationName": { $regex: "${searchValue}" }}`
      axios.get(ourUrl).then(response => {
        console.log(response.data)

        var obj = {}
        for ( var i = 0, len = response.data.length; i < len; i++ ){
          if(!obj[response.data[i]['tabcPermitNumber']]) obj[response.data[i]['tabcPermitNumber']] = response.data[i]
        }
        var newArr = []
        for ( var key in obj ) newArr.push(obj[key])
        console.log(newArr)

        this.setState({
          searchString: searchValue,
          foundBarsData: newArr,
          foundBarsTotal: newArr.length,
        })
      })
    } else {
      this.setState({
        searchString: '',
        foundBarsData: null,
        foundBarsTotal: undefined,
      })
    }
  }

  render () {
    const { classes } = this.props
    return (
      <div>
      <Paper className={classes.root} elevation={4}>

        <form noValidate autoComplete="off">
          <TextField
            id="search"
            label="Bar name"
            type="search"
            className={classes.textField}
            margin="normal"
            onChange={e => this.getBars(e.target.value)}
            value={this.state.value}
          />
        </form>

        {this.state.foundBarsData ? (

          <div>
            <Typography variant="headline" gutterBottom>
              Found: {this.state.foundBarsTotal}
            </Typography>

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
          </div>

        ) : "Use search field above."}

      </Paper>
      </div>
    )
  }
}

SearchContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SearchContainer)
