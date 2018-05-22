import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import { ResponsiveLine } from '@nivo/line'

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
  console.log(props.data);

    return (
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              {/* <Paper className={classes.paper}> */}
                {/* <LineChart width={600} height={300} data={props.data}
                      margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                 <XAxis dataKey="obligationEndDate"/>
                 <YAxis/>
                 <CartesianGrid strokeDasharray="3 3"/>
                 <Tooltip/>
                 <Legend />
                 <Line type="monotone" dataKey="returnTotal" stroke="#8884d8" activeDot={{r: 8}}/>
                </LineChart> */}
                <ResponsiveLine className={classes.responsiveLineStyle}
                       data={
                         [
                           {
                             "id": "whisky",
                             "color": "hsl(328, 70%, 50%)",
                             "data": [
                               {
                                 "color": "hsl(324, 70%, 50%)",
                                 "x": "ZM",
                                 "y": 34
                               },
                               {
                                 "color": "hsl(38, 70%, 50%)",
                                 "x": "SN",
                                 "y": 23
                               },
                               {
                                 "color": "hsl(140, 70%, 50%)",
                                 "x": "KW",
                                 "y": 31
                               },
                               {
                                 "color": "hsl(209, 70%, 50%)",
                                 "x": "CK",
                                 "y": 59
                               },
                               {
                                 "color": "hsl(45, 70%, 50%)",
                                 "x": "LV",
                                 "y": 58
                               },
                               {
                                 "color": "hsl(252, 70%, 50%)",
                                 "x": "MQ",
                                 "y": 26
                               },
                               {
                                 "color": "hsl(133, 70%, 50%)",
                                 "x": "CN",
                                 "y": 25
                               },
                               {
                                 "color": "hsl(230, 70%, 50%)",
                                 "x": "AI",
                                 "y": 0
                               },
                               {
                                 "color": "hsl(82, 70%, 50%)",
                                 "x": "RO",
                                 "y": 38
                               }
                             ]
                           },
                           {
                             "id": "rhum",
                             "color": "hsl(115, 70%, 50%)",
                             "data": [
                               {
                                 "color": "hsl(292, 70%, 50%)",
                                 "x": "ZM",
                                 "y": 9
                               },
                               {
                                 "color": "hsl(44, 70%, 50%)",
                                 "x": "SN",
                                 "y": 22
                               },
                               {
                                 "color": "hsl(58, 70%, 50%)",
                                 "x": "KW",
                                 "y": 0
                               },
                               {
                                 "color": "hsl(284, 70%, 50%)",
                                 "x": "CK",
                                 "y": 47
                               },
                               {
                                 "color": "hsl(168, 70%, 50%)",
                                 "x": "LV",
                                 "y": 3
                               },
                               {
                                 "color": "hsl(72, 70%, 50%)",
                                 "x": "MQ",
                                 "y": 30
                               },
                               {
                                 "color": "hsl(340, 70%, 50%)",
                                 "x": "CN",
                                 "y": 59
                               },
                               {
                                 "color": "hsl(136, 70%, 50%)",
                                 "x": "AI",
                                 "y": 32
                               },
                               {
                                 "color": "hsl(227, 70%, 50%)",
                                 "x": "RO",
                                 "y": 25
                               }
                             ]
                           },
                           {
                             "id": "gin",
                             "color": "hsl(50, 70%, 50%)",
                             "data": [
                               {
                                 "color": "hsl(180, 70%, 50%)",
                                 "x": "ZM",
                                 "y": 6
                               },
                               {
                                 "color": "hsl(350, 70%, 50%)",
                                 "x": "SN",
                                 "y": 37
                               },
                               {
                                 "color": "hsl(288, 70%, 50%)",
                                 "x": "KW",
                                 "y": 56
                               },
                               {
                                 "color": "hsl(322, 70%, 50%)",
                                 "x": "CK",
                                 "y": 13
                               },
                               {
                                 "color": "hsl(168, 70%, 50%)",
                                 "x": "LV",
                                 "y": 18
                               },
                               {
                                 "color": "hsl(153, 70%, 50%)",
                                 "x": "MQ",
                                 "y": 20
                               },
                               {
                                 "color": "hsl(167, 70%, 50%)",
                                 "x": "CN",
                                 "y": 37
                               },
                               {
                                 "color": "hsl(116, 70%, 50%)",
                                 "x": "AI",
                                 "y": 18
                               },
                               {
                                 "color": "hsl(201, 70%, 50%)",
                                 "x": "RO",
                                 "y": 7
                               }
                             ]
                           },
                           {
                             "id": "vodka",
                             "color": "hsl(205, 70%, 50%)",
                             "data": [
                               {
                                 "color": "hsl(48, 70%, 50%)",
                                 "x": "ZM",
                                 "y": 5
                               },
                               {
                                 "color": "hsl(236, 70%, 50%)",
                                 "x": "SN",
                                 "y": 31
                               },
                               {
                                 "color": "hsl(151, 70%, 50%)",
                                 "x": "KW",
                                 "y": 21
                               },
                               {
                                 "color": "hsl(318, 70%, 50%)",
                                 "x": "CK",
                                 "y": 8
                               },
                               {
                                 "color": "hsl(239, 70%, 50%)",
                                 "x": "LV",
                                 "y": 50
                               },
                               {
                                 "color": "hsl(190, 70%, 50%)",
                                 "x": "MQ",
                                 "y": 31
                               },
                               {
                                 "color": "hsl(144, 70%, 50%)",
                                 "x": "CN",
                                 "y": 47
                               },
                               {
                                 "color": "hsl(138, 70%, 50%)",
                                 "x": "AI",
                                 "y": 24
                               },
                               {
                                 "color": "hsl(95, 70%, 50%)",
                                 "x": "RO",
                                 "y": 21
                               }
                             ]
                           },
                           {
                             "id": "cognac",
                             "color": "hsl(230, 70%, 50%)",
                             "data": [
                               {
                                 "color": "hsl(22, 70%, 50%)",
                                 "x": "ZM",
                                 "y": 12
                               },
                               {
                                 "color": "hsl(228, 70%, 50%)",
                                 "x": "SN",
                                 "y": 18
                               },
                               {
                                 "color": "hsl(282, 70%, 50%)",
                                 "x": "KW",
                                 "y": 31
                               },
                               {
                                 "color": "hsl(207, 70%, 50%)",
                                 "x": "CK",
                                 "y": 37
                               },
                               {
                                 "color": "hsl(107, 70%, 50%)",
                                 "x": "LV",
                                 "y": 60
                               },
                               {
                                 "color": "hsl(31, 70%, 50%)",
                                 "x": "MQ",
                                 "y": 52
                               },
                               {
                                 "color": "hsl(156, 70%, 50%)",
                                 "x": "CN",
                                 "y": 55
                               },
                               {
                                 "color": "hsl(128, 70%, 50%)",
                                 "x": "AI",
                                 "y": 2
                               },
                               {
                                 "color": "hsl(221, 70%, 50%)",
                                 "x": "RO",
                                 "y": 25
                               }
                             ]
                           }
                         ]
                       }
                       margin={{
                           "top": 50,
                           "right": 110,
                           "bottom": 50,
                           "left": 60
                       }}
                       minY="auto"
                       stacked={true}
                       axisBottom={{
                           "orient": "bottom",
                           "tickSize": 5,
                           "tickPadding": 5,
                           "tickRotation": 0,
                           "legend": "country code",
                           "legendOffset": 36,
                           "legendPosition": "center"
                       }}
                       axisLeft={{
                           "orient": "left",
                           "tickSize": 5,
                           "tickPadding": 5,
                           "tickRotation": 0,
                           "legend": "count",
                           "legendOffset": -40,
                           "legendPosition": "center"
                       }}
                       dotSize={10}
                       dotColor="inherit:darker(0.3)"
                       dotBorderWidth={2}
                       dotBorderColor="#ffffff"
                       enableDotLabel={true}
                       dotLabel="y"
                       dotLabelYOffset={-12}
                       animate={true}
                       motionStiffness={90}
                       motionDamping={15}
                       legends={[
                           {
                               "anchor": "bottom-right",
                               "direction": "column",
                               "translateX": 100,
                               "itemWidth": 80,
                               "itemHeight": 20,
                               "symbolSize": 12,
                               "symbolShape": "circle"
                           }
                       ]}
                   />
              {/* </Paper> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <LineChartTools />
              </Paper>
            </Grid>
          </Grid>
        </div>
    )
}

LineChartContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LineChartContainer)
