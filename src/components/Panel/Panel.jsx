import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	paper: {
		marginTop: '4em',
		background: 'url(./img/bg.jpg) no-repeat center center fixed',
		backgroundSize: '100%',
		padding: '4em'
	},
	display2: {
		marginBottom: '.75em',
		color: 'white'
	},
	title: {
		// color: theme.palette.secondary.main
		color: 'white'
	}
})

class Panel extends React.Component {

	render() {
		const { paper, display2, title } = this.props.classes
		return (
			<Paper elevation={0} square className={paper}>
				<Typography 
					className={display2} 
					variant='display2' 
					align='center'
				>
					Clicky Game
				</Typography>
				<Typography 
					className={title} 
					variant='title'
					align='center'
				>
				 	Click on an image to earn points, but don't click on any more than once!
				</Typography>
			</Paper>
		)
	}
}

export default withStyles(styles)(Panel)