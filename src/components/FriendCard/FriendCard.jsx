import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Card, CardMedia } from '@material-ui/core'

const styles = {
	card: {
		maxWidth: 150,
		margin: '0 auto',
	},
	media: {
		height: 175,
		margin: '0 auto',
	}
}

class FriendCard extends React.Component {

	render() {
		const { classes, id, handleGuess, name, img, color } = this.props
		return (
			<Grid item xs>
				<Card 
					className={ classes.card } 
					style={{border: `2px solid ${ color }`}} 
					id={ id } 
					onClick={ () => handleGuess(id) }
				>
					<CardMedia 
						className={ classes.media } 
						component='img' 
						image={ img } 
						title={ name } 
					/>
				</Card>
			</Grid>
		)
	}
}

export default withStyles(styles)(FriendCard)