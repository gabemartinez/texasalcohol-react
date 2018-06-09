import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
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
    locationAddress: '',
    locationCity: '',
    locationState: '',
    locationZip: '',
  }

  async componentDidMount() {

    // first request
    const { reportId } = this.props.match.params
    const ourUrl = `https://api.mlab.com/api/1/databases/${process.env.REACT_APP_MLAB_DB}/collections/${process.env.REACT_APP_MLAB_COLLECTION}?apiKey=${process.env.REACT_APP_MLAB_KEY}&q={"tabcPermitNumber": "${reportId}" }`
    // const firstRequest = await
    await
    axios.get(ourUrl).then(response => {
          console.log(response.data)
          this.setState({
            barData: response.data,
            tabcPermitNumber: reportId,
            locationName: response.data[0].locationName,
            locationAddress: response.data[0].locationAddress,
            locationCity: response.data[0].locationCity,
            locationState: response.data[0].locationState,
            locationZip: response.data[0].locationZip,
          })
    })

    // second request
    const locationZip = this.state.locationZip
    const ourUrlZips = `https://api.mlab.com/api/1/databases/${process.env.REACT_APP_MLAB_DB}/collections/${process.env.REACT_APP_MLAB_COLLECTION}?apiKey=${process.env.REACT_APP_MLAB_KEY}&l=10000&q={"locationZip": ${locationZip} }`
    // const secondRequest = await
    await
    axios.get(ourUrlZips).then(responseZipData => {
          console.log(responseZipData.data)
    })

    // testing
    // console.log(firstRequest);
    // console.log(secondRequest);

  }

  render() {
    const { classes, match } = this.props
      return (
          <Router>
            <Paper className={classes.root} elevation={4}>

              <Grid container spacing={8}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <BarName tabcPermitNumber={this.state.tabcPermitNumber} barname={this.state.locationName} locationAddress={this.state.locationAddress} locationCity={this.state.locationCity} locationState={this.state.locationState} locationZip={this.state.locationZip} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <RanksBasedOnSales />
                </Grid>
              </Grid>

              <Grid container spacing={8}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <LineChartContainer barname={this.state.locationName} data={this.state.barData} />
                </Grid>
              </Grid>

              <Grid container spacing={8}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <MonthlyRevenue />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Summary />
                </Grid>
              </Grid>

              <Grid container spacing={8}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <SimilarBars />
                </Grid>
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
