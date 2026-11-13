import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Card, CardMedia } from '@material-ui/core';

const styles = {
  card: {
    maxWidth: 165,
    margin: '0 auto',
    borderRadius: 12,
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.45)',
    '&:hover': {
      transform: 'translateY(-6px) scale(1.04)',
      boxShadow: '0 14px 28px rgba(0, 0, 0, 0.65)',
    },
    '&:active': {
      transform: 'scale(0.98)',
    },
  },
  media: {
    height: 180,
    width: '100%',
    objectFit: 'contain',
    padding: 8,
  },
};

const borderColors = {
  green: '#00e676',
  red: '#ff1744',
  white: 'rgba(255, 255, 255, 0.15)',
};

class FriendCard extends React.Component {
  render() {
    const { classes, id, handleGuess, name, img, color } = this.props;
    const activeBorder = borderColors[color] || borderColors.white;

    return (
      <Grid item xs={6} sm={3}>
        <Card
          className={classes.card}
          style={{ border: `3px solid ${activeBorder}` }}
          id={id}
          onClick={() => handleGuess(id)}
        >
          <CardMedia
            className={classes.media}
            component="img"
            image={img}
            title={name}
          />
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(FriendCard);
