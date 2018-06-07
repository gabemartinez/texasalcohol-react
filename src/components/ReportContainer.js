import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'

import BarName from '../components/BarName'
import RanksBasedOnSales from '../components/RanksBasedOnSales'
import LineChartContainer from '../components/LineChartContainer'
import MonthlyRevenue from '../components/MonthlyRevenue'
import Summary from '../components/Summary'
import SimilarBars from '../components/SimilarBars'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
})

class ReportContainer extends React.Component {

  state = {
    tabcPermitNumber: null,
    barData: [],
    locationName: '',
    locationAddress: ''
  }

  componentDidMount () {
    const { reportId } = this.props.match.params
    // console.log(reportId);
    const ourUrl = `https://api.mlab.com/api/1/databases/${process.env.REACT_APP_MLAB_DB}/collections/${process.env.REACT_APP_MLAB_COLLECTION}?apiKey=${process.env.REACT_APP_MLAB_KEY}&q={"tabcPermitNumber": "${reportId}" }`
    axios.get(ourUrl).then(response => {
      console.log(response.data)
      this.setState({
        barData: response.data,
        tabcPermitNumber: reportId,
        locationName: response.data[0].locationName,
        locationAddress: response.data[0].locationAddress
      })
    })
  }

  render() {
    const { classes, match } = this.props
      return (
          <Router>
            <Paper className={classes.root} elevation={4}>
              <h3>TABC Permit Number: {this.state.tabcPermitNumber}</h3>
                <Grid item xs={12} sm={6}>
                    <BarName barname={this.state.locationName} locationAddress={this.state.locationAddress} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <RanksBasedOnSales />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <LineChartContainer data={this.state.tabcPermitNumber} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MonthlyRevenue />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Summary />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <SimilarBars />
                </Grid>
            </Paper>
          </Router>
      )
  }
}

ReportContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ReportContainer)
