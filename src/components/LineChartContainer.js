import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import {Line} from 'react-chartjs-2'
import numeral from 'numeral'
import moment from 'moment'

import LineChartTools from '../components/LineChartTools'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  responsiveLineStyle: {
    height: '50px',
  }
})

const LineChartContainer = props => {
  const { classes } = props

  // console.log(props)

  var ourLabels = props.data.map(function(elem) {
      return elem.obligationEndDate
  })
  // console.log(ourLabels)

  var returnTotalData = props.data.map(function(elem) {
      return elem.returnTotal
  })
  // console.log(returnTotalData)

  var returnWineData = props.data.map(function(elem) {
      return elem.wineReceipts
  })
  // console.log(returnWineData)

  var returnBeerData = props.data.map(function(elem) {
      return elem.beerReceipts
  })
  // console.log(returnBeerData)

  var returnLiquorData = props.data.map(function(elem) {
      return elem.liquorReceipts
  })
  // console.log(returnLiquorData)

  const data = {
    labels: [],
    datasets: [
      {
        label: 'Total',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(63, 191, 63,0.4)',
        borderColor: 'rgba(63, 191, 63,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(63, 191, 63,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(63, 191, 63,1)',
        pointHoverBorderColor: 'rgba(63, 191, 63,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: []
      },
      {
        label: 'Wine',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(191, 63, 63,0.4)',
        borderColor: 'rgba(191, 63, 63,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(191, 63, 63,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(191, 63, 63,1)',
        pointHoverBorderColor: 'rgba(191, 63, 63,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: []
      },
      {
        label: 'Beer',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(188, 188, 0,0.4)',
        borderColor: 'rgba(188, 188, 0,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(188, 188, 0,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(188, 188, 0,1)',
        pointHoverBorderColor: 'rgba(188, 188, 0,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: []
      },
      {
        label: 'Liquor',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(123, 68, 13,0.4)',
        borderColor: 'rgba(123, 68, 13,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(123, 68, 13,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(123, 68, 13,1)',
        pointHoverBorderColor: 'rgba(123, 68, 13,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: []
      }
    ]
  }

  data.labels = ourLabels
  data.datasets[0].data = returnTotalData
  data.datasets[1].data = returnWineData
  data.datasets[2].data = returnBeerData
  data.datasets[3].data = returnLiquorData

  const options = {
        scales: {
            yAxes: [{
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return numeral(value).format('$0,0')
                    }
                }
            }],
            xAxes: [{
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return moment(value, "YYYYMMDD").format('L')
                    }
                }
            }]
        },
        tooltips: {
            enabled: true,
            mode: 'single',
            callbacks: {
                label: function(tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].label +': ' + numeral(tooltipItems.yLabel).format('$0,0');
                }
            }
        },
    }

    return (

        <div className={classes.root}>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Line data={data} options={options} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <LineChartTools />
            </Grid>
          </Grid>
        </div>
    )
}

LineChartContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LineChartContainer)
