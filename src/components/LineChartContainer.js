import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'

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
})

const LineChartContainer = props => {
  const { classes } = props
  console.log(props.data);

    return (
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <LineChart width={600} height={300} data={props.data}
                      margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                 <XAxis dataKey="obligationEndDate"/>
                 <YAxis/>
                 <CartesianGrid strokeDasharray="3 3"/>
                 <Tooltip/>
                 <Legend />
                 <Line type="monotone" dataKey="returnTotal" stroke="#8884d8" activeDot={{r: 8}}/>
                </LineChart>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12}>
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
