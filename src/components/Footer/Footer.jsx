import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const styles = {
  paper: {
    padding: '1em',
    backgroundColor: '#161922',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.55)',
    fontSize: '0.85rem',
  },
};

class Footer extends React.Component {
  render() {
    const { text, paper } = this.props.classes;
    return (
      <footer>
        <Paper className={paper} square elevation={0}>
          <Typography className={text} align="center">
            Clicky Game &copy; Copyright 2012 &ndash; &infin; &bull; All rights reserved.
          </Typography>
        </Paper>
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);
