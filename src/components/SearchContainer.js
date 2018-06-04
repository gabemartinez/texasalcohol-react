import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

let id = 0;
function createData(name, address) {
  id += 1;
  return { id, name, address };
}

const data = [
  createData('Frozen yoghurt', '1204 AIRWAY BLVD'),
  createData('Ice cream sandwich', '14261 MONTANA AVE STE A'),
  createData('Eclair', '1204 AIRWAY BLVD'),
  createData('Cupcake', '14261 MONTANA AVE STE A'),
  createData('Gingerbread', '1204 AIRWAY BLVD'),
];

class SearchContainer extends React.Component {

  // componentDidMount() {
  //   const ourBarName = 'gab'.toUpperCase()
  //   const ourUrl = `https://api.mlab.com/api/1/databases/${process.env.REACT_APP_MLAB_DB}/collections/${process.env.REACT_APP_MLAB_COLLECTION}?apiKey=${process.env.REACT_APP_MLAB_KEY}&q={"locationName": { $regex: "${ourBarName}" }}`
  //   axios.get(ourUrl).then(response => {console.log(response.data)})
  // }

  constructor(props) {
    super(props)
    this.getBars()
    this.state = {
      foundBars: [],
      searchString: '',
      barname: undefined,
      searchresultstotal: undefined,
      data: undefined,
      tabcPermitNumber: undefined,
      error: "",
      value: ''
    }
  }

  getBars(event) {
    console.log('get bars');
    // this.setState({value: event.target.value});
    const ourBarName = 'malo'.toUpperCase()
    const ourUrl = `https://api.mlab.com/api/1/databases/${process.env.REACT_APP_MLAB_DB}/collections/${process.env.REACT_APP_MLAB_COLLECTION}?apiKey=${process.env.REACT_APP_MLAB_KEY}&q={"locationName": { $regex: "${ourBarName}" }}`
    axios.get(ourUrl).then(response => {console.log(response.data)})
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
            onChange={this.getBars}
            value={this.state.value}
          />
        </form>

        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(n => {
                return (
                  <TableRow hover key={n.id}>
                    <TableCell component="th" scope="row">
                      {n.name}
                    </TableCell>
                    <TableCell>{n.address}</TableCell>
                  </TableRow>
                );
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
