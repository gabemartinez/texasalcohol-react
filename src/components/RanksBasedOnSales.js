import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const RanksBasedOnSales = props => {

    const { classes } = props;
    return (
      <Grid container spacing={8}>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
          <Paper className={classes.root} elevation={1}>
            <Typography variant="subheading" align="center">
              El Paso Rank
            </Typography>
            <Typography variant="headline" align="center">
              { props.elPasoRank
                  ? props.elPasoRank
                  : <CircularProgress className={classes.progress} />
              }
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
          <Paper className={classes.root} elevation={1}>
            <Typography variant="subheading" align="center">
              Zip Rank
            </Typography>
            <Typography variant="headline" align="center">
              { props.zipRank
                  ? props.zipRank
                  : <CircularProgress className={classes.progress} />
              }
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
          <Paper className={classes.root} elevation={1}>
            <Typography variant="subheading" align="center">
              Texas Rank
            </Typography>
            <Typography variant="headline" align="center">
              { props.stateRank
                  ? props.stateRank
                  : <CircularProgress className={classes.progress} />
              }
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    )
}

export default withStyles(styles)(RanksBasedOnSales);
