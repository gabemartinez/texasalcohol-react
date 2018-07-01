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
// import Summary from '../components/Summary'
import SimilarBars from '../components/SimilarBars'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
})

class ReportContainer extends React.Component {

  state = {
    tabcPermitNumber: undefined,
    barData: [],
    locationName: '',
    locationAddress: '',
    locationCity: '',
    locationState: '',
    locationZip: '',
    comparisonBarData: [],
    elPasoRank: Math.floor(Math.random() * 200),
    zipRank: Math.floor(Math.random() * 30),
    stateRank: Math.floor(Math.random() * 3000),
    similarBarsData: [
      {name: 'CANTINA MALOLAM', tabcno: 'MB871033'},
      {name: 'HOPE AND ANCHOR', tabcno: 'MB726817'},
      {name: 'BLACKBIRD CANTINA DELUXE', tabcno: 'MB869540'},
      {name: 'THE LEGENDARY TIPSY TIGER', tabcno: 'MB899885'},
      {name: 'BORDER CITY ALE HOUSE', tabcno: 'MB570152'},
      {name: 'LATER LATER', tabcno: 'MB905485'},
      {name: 'GRINGO THEORY', tabcno: 'MB955810'},
      {name: "ADRIAN'S EAST", tabcno: 'MB856779'},
      {name: "FUNKMEYER'S REC ROOM", tabcno: 'MB865717'},
      {name: "TRADECRAFT COFFEE AND COCKTAILS", tabcno: 'MB900224'},
      {name: "THE HOPPY MONK, L.L.C.", tabcno: 'MB756366'},
    ]
  }

  async componentDidMount() {

    // first request
    const { reportId } = this.props.match.params
    const ourUrl = `https://api.mlab.com/api/1/databases/${process.env.REACT_APP_MLAB_DB}/collections/${process.env.REACT_APP_MLAB_COLLECTION}?apiKey=${process.env.REACT_APP_MLAB_KEY}&q={"tabcPermitNumber": "${reportId}" }`
    // const firstRequest = await
    await
    axios.get(ourUrl).then(response => {
          // console.log(response.data)
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

          var tabcArray = responseZipData.data.map(elem => elem.tabcPermitNumber);
          console.log('tabcArray');
          // console.log(tabcArray);

          console.log('unique zips');
          const uniqueTabc = [...new Set( responseZipData.data.map(obj => obj.tabcPermitNumber)) ];
          // console.log(uniqueTabc);

          console.log('responseZipData.data');
          console.log(responseZipData.data)

          // this.setState({
          //   elPasoRank: 55,
          //   zipRank: 66,
          // })
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
                    <RanksBasedOnSales locationZip={this.state.locationZip} elPasoRank={this.state.elPasoRank} zipRank={this.state.zipRank} stateRank={this.state.stateRank} />
                </Grid>
              </Grid>

              <Grid container spacing={8}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <LineChartContainer barname={this.state.locationName} data={this.state.barData} />
                </Grid>
              </Grid>

              <Grid container spacing={8}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <MonthlyRevenue barname={this.state.locationName} data={this.state.barData} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    {/* <Summary /> */}
                    <SimilarBars similarBarsData={this.state.similarBarsData} />
                </Grid>
              </Grid>

              {/* <Grid container spacing={8}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <SimilarBars />
                </Grid>
              </Grid> */}

            </Paper>
          </Router>
      )
  }
}

ReportContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ReportContainer)
