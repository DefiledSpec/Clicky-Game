import React from 'react';
import { Grid } from '@material-ui/core';
import { Score } from '../';

class ScoreBoard extends React.Component {
  render() {
    const { score, topScore, wins, color } = this.props;
    return (
      <Grid container spacing={16} alignItems="center" justify="flex-end">
        <Score score={score} color={color}>Score</Score>
        {topScore > 0 && <Score score={topScore}>Best</Score>}
        {wins >= 1 && <Score score={wins}>Wins</Score>}
      </Grid>
    );
  }
}

export default ScoreBoard;
