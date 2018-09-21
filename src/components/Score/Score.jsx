import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

class Score extends React.Component {
	render() {
		const { score, topScore, color } = this.props
		return (
			<Grid item xs>
				<Typography 
					variant='headline' 
					align='center' 
					color='inherit'
				>
					Score:&nbsp; 
					<span style={ { color } }>{ score }</span>&nbsp;
					| Top Score:&nbsp;
					<span>{ topScore }</span>			
				</Typography>
			</Grid>
		)
	}
}

export default Score