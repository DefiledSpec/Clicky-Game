import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { FriendCard } from '../'

const styles = {
	container: {
		margin: '4em auto 6em auto',
	},
}

class Characters extends React.Component {

	render() {
		const { classes, characters, handleGuess, color } = this.props
		return (
			<div className={classes.container}>
				{characters.map((ea, i) => (
					<Grid key={ i } container spacing={ 24 }>
					{ea.map((char, i) => (
						<FriendCard
							key={ i }
							id={ char.id }
							handleGuess={ handleGuess }
							name={ char.name }
							img={ char.img }
							color={ color }
						/>
						)
					)}
					</Grid>
				))}
			</div>
		)
	}
}

export default withStyles(styles)(Characters)