import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { FriendCard } from '../';

const styles = {
  container: {
    maxWidth: 860,
    width: '100%',
    margin: '1em auto 4em auto',
    padding: '0 24px',
  },
  row: {
    marginBottom: 24,
  },
  '@keyframes shakeDeck': {
    '0%, 100%': { transform: 'translateX(0)' },
    '15%, 55%': { transform: 'translateX(-12px)' },
    '35%, 75%': { transform: 'translateX(12px)' },
  },
  shake: {
    animation: 'shakeDeck 0.45s ease-in-out',
  },
};

class Characters extends React.Component {
  render() {
    const { classes, characters, handleGuess, color, shake } = this.props;
    const containerClass = shake
      ? `${classes.container} ${classes.shake}`
      : classes.container;

    return (
      <div className={containerClass}>
        {characters.map((ea, i) => (
          <Grid key={i} container spacing={24} justify="center" className={classes.row}>
            {ea.map((char) => (
              <FriendCard
                key={char.id}
                id={char.id}
                handleGuess={handleGuess}
                name={char.name}
                img={char.img}
                color={color}
              />
            ))}
          </Grid>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(Characters);
