import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  pill: {
    display: 'inline-block',
    padding: '6px 18px',
    borderRadius: 20,
    fontWeight: 600,
    fontSize: '0.95rem',
    letterSpacing: '0.03em',
    transition: 'all 0.2s ease',
  },
};

const statusThemes = {
  green: {
    backgroundColor: 'rgba(0, 230, 118, 0.16)',
    color: '#00e676',
    border: '1px solid rgba(0, 230, 118, 0.45)',
  },
  red: {
    backgroundColor: 'rgba(255, 23, 68, 0.16)',
    color: '#ff5252',
    border: '1px solid rgba(255, 23, 68, 0.45)',
  },
  white: {
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
    color: '#e0e0e0',
    border: '1px solid rgba(255, 255, 255, 0.15)',
  },
};

class Status extends React.Component {
  render() {
    const { classes, status, color } = this.props;
    const activeTheme = statusThemes[color] || statusThemes.white;

    return (
      <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
        <Typography
          component="span"
          className={classes.pill}
          style={activeTheme}
        >
          {status}
        </Typography>
      </Grid>
    );
  }
}

export default withStyles(styles)(Status);
