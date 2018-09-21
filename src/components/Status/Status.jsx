import React from 'react'
import { Grid, Typography } from '@material-ui/core'

class Status extends React.Component {
	render() {
		const { status, color } = this.props
		return (
			<Grid item xs>
				<Typography 
					variant='headline' 
					align='center' 
					color='inherit' 
					style={ { color } }
				>
					{ status }				
				</Typography>
			</Grid>
		)
	}
}

export default Status