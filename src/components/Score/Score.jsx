import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  scoreBox: {
    display: 'inline-flex',
    alignItems: 'baseline',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: '4px 12px',
    borderRadius: 8,
    border: '1px solid rgba(255, 255, 255, 0.08)',
  },
  label: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    color: 'rgba(255, 255, 255, 0.65)',
    marginRight: 6,
  },
  value: {
    fontSize: '1.1rem',
    fontWeight: 700,
    transition: 'color 0.2s ease',
  },
};

const valueColors = {
  green: '#00e676',
  red: '#ff5252',
  white: '#ffffff',
};

class Score extends React.Component {
  render() {
    const { classes, children: type, color, score } = this.props;
    const activeColor = valueColors[color] || '#ffffff';

    return (
      <Grid item>
        <div className={classes.scoreBox}>
          <Typography component="span" className={classes.label}>
            {type}
          </Typography>
          <Typography
            component="span"
            className={classes.value}
            style={{ color: activeColor }}
          >
            {score}
          </Typography>
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(Score);
