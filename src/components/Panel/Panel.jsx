import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  paper: {
    margin: '1.5em auto 0.5em auto',
    maxWidth: 720,
    backgroundColor: 'rgba(15, 17, 23, 0.65)',
    backdropFilter: 'blur(4px)',
    borderRadius: 16,
    border: '1px solid rgba(255, 255, 255, 0.08)',
    padding: '1.5em 2em',
    transition: 'all 0.35s ease',
  },
  winPaper: {
    backgroundColor: 'rgba(0, 230, 118, 0.14)',
    border: '1px solid rgba(0, 230, 118, 0.55)',
    boxShadow: '0 0 30px rgba(0, 230, 118, 0.25)',
    transform: 'scale(1.02)',
  },
  display2: {
    marginBottom: '0.25em',
    color: '#ffffff',
    fontWeight: 800,
    textShadow: '0 2px 12px rgba(0, 0, 0, 0.6)',
  },
  winHeading: {
    color: '#00e676',
  },
  title: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: 400,
    fontSize: '1.05rem',
  },
};

class Panel extends React.Component {
  render() {
    const { classes, won, wins, streak } = this.props;
    const paperClass = won ? `${classes.paper} ${classes.winPaper}` : classes.paper;
    const headingClass = won ? `${classes.display2} ${classes.winHeading}` : classes.display2;

    return (
      <Paper elevation={0} className={paperClass}>
        <Typography className={headingClass} variant="display2" align="center">
          {won ? 'Flawless Victory! (8/8)' : 'Clicky Game'}
        </Typography>
        <Typography className={classes.title} variant="title" align="center">
          {won
            ? `Total Wins: ${wins} • Current Streak: ${streak} — Click any card to start the next round!`
            : "Click on an image to earn points, but don't click on any more than once!"}
        </Typography>
      </Paper>
    );
  }
}

export default withStyles(styles)(Panel);
