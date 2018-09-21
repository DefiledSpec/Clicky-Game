import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'

const styles = theme => ({
	footer: {
	},
	paper: {
		padding: '.75em',
		backgroundColor: theme.palette.primary.main
	},
	text: {
		color: 'white'
	}
})

class Footer extends React.Component {
	render() {
		const { text, paper } = this.props.classes
		return (
			<footer>
				<Paper className={ paper } square>
					<Typography 
						className={ text } 
						align='center'
					>
						Clicky Game &copy; Copyright 2012 - &#8734;
					</Typography>
					<Typography 
						className={ text } 
						align='center'
					>
						All rights reserved.
					</Typography>
				</Paper>
			</footer>	
		)
	}
}

export default withStyles(styles)(Footer)