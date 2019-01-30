import React from 'react'
import { Grid } from '@material-ui/core'
import { Score } from '../'

class ScoreBoard extends React.Component {
	render() {
		const { score, topScore, wins, color } = this.props
		return (
			<Grid container col={3} spacing={24} align='center' justify='center' >
				<Score score={ score } color={color}>Score</Score>
				{topScore > 1 && <Score score={ topScore }>Top Score</Score>}
				{wins >= 1 && <Score score={ wins }>Wins</Score>}
			</Grid>
		)
	}
}

export default ScoreBoard