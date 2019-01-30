import React from 'react'
import { Typography, Grid } from '@material-ui/core'

class Score extends React.Component {
	render() {
		const { children : type, color, score  } = this.props
		return (
			<Grid item xs>
				<Typography
					variant='headline' 
					align='center' 
					color='inherit'
				>
					{ type }:&nbsp;{ (color && 
						<span style={{ color }}>{ score }</span>)
						||
						score
					}
				</Typography>
			</Grid>
		)
	}
}

export default Score