import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { Status, ScoreBoard } from '../';

const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'rgba(22, 25, 34, 0.92)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
  },
  toolbar: {
    maxWidth: 1100,
    width: '100%',
    margin: '0 auto',
    minHeight: 68,
  },
  brand: {
    fontWeight: 700,
    letterSpacing: '0.04em',
    color: '#ffffff',
  },
  accent: {
    color: '#ff6d00',
  },
};

class Navbar extends React.Component {
  render() {
    const { classes, score, topScore, status, wins, color } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Grid container spacing={16} alignItems="center" justify="space-between">
              <Grid item xs={12} sm={4}>
                <Typography variant="headline" align="left" className={classes.brand}>
                  MEMORY <span className={classes.accent}>GAME</span>
                </Typography>
              </Grid>

              <Status status={status} color={color} />

              <Grid item xs={12} sm={4}>
                <ScoreBoard
                  score={score}
                  topScore={topScore}
                  wins={wins}
                  color={color}
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
