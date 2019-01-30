import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import {AppBar, Toolbar, Typography, Grid} from '@material-ui/core'
import { Status, ScoreBoard } from '../'

const styles = {
	root: {
		flexGrow: 1,
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		height: 'max-content',
		display: 'block',
	},
	gridItem: {
		margin: '0 auto'
	}
}

class Navbar extends React.Component {
	render() {
		const { classes, score, topScore, status, wins, color } = this.props
		const { root, gridItem } = classes
		return (
			<div className={ root }>
				<AppBar position='sticky'>
					<Toolbar color='inherit'>
						<Grid container spacing={24} align='center' justify='center'>
							<Grid className={ gridItem } item xs>
								<Typography variant='headline' align='center' color='inherit'>
									Memory Game				
								</Typography>
							</Grid>
							<Status status={ status } color={ color } />
						</Grid>
						<ScoreBoard score={score} topScore={topScore} wins={wins} color={color} />
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}

Navbar.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navbar)