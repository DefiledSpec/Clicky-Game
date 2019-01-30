import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import withRoot from './withRoot'
import { Grid } from '@material-ui/core'
import { Navbar, Footer, Panel, Characters, ScoreBoard } from './components'
import { characters } from './characters'
import { shuffle } from './utils'

const styles = theme => ({
	root: {
		// background: 'url(./img/bg.jpg) no-repeat center center fixed',
		backgroundSize: '100%',
		height: '100%'
	},
})

class App extends Component {

	state = {
		status: 'Start Playing!',
		score: 0,
		topScore: 0,
		wins: 0,	// Update for users who guess all 8
		streak: 0,	// Update for users who guess all 8
		clicked: [],
		characters,
		color: 'white',
		locked: false
	}

	reset() {
		const { score } = this.state
		let topScore = this.state.topScore < score ? score : this.state.topScore
		this.setState({
			score: 0,
			topScore,
			clicked: [],
			streak: 0,			
		})
	}

	isGuessed(id) {
		console.log(this.state.clicked, id, this.state.clicked.includes(id))
		return this.state.clicked.includes(id)
	} 

	handleGuess = (id) => {
		if (!this.state.locked) {
			this.setState({ locked: true })
			let { wins: curWins, score: curScore, streak: curStreak, clicked } = this.state
			 // bool -> was this card guessed?
			console.log('curScore: ', (curScore + 1 === 3))
			// this.style.color = this.state.color
			if((curScore + 1) === 8) {
				this.setState({
					clicked: [],
					score: 0, 
					wins: curWins + 1,
					streak: curStreak + 1,
					color: 'green',
					clicked, 
					topScore: 8,
				})
			}
			console.log(!this.isGuessed(id))
			let isGuessed = !this.isGuessed(id)
			if(isGuessed) {
				let clicked = [ ...this.state.clicked, id ]
				this.setState({
					color: 'green',
					score: curScore + 1,
					status: 'Correct!',
					clicked
				})	
			} else {
				this.setState({
					color: 'red',
					status: 'Incorrect!'
				})
			}
			// let characters = this.state.characters.map(ea => shuffle(ea))
			setTimeout((arg) => {
				this.setState({
					// characters, 
					locked: false, 
					color: 'white'
				})
				console.log('not ', arg)
				if(arg) this.reset()
			}, 300, this.isGuessed(id))
		}
	}

  	render() {
		const { classes } = this.props,
		{ characters, color, clicked } = this.state
		// console.log('Clicked: ', clicked, this.state.score)
    	return (
			<main className={ classes.root }>
				<Navbar { ...this.state } />
				<Grid>
				<ScoreBoard { ...this.state } />
				</Grid>
				<Panel /> 
				<Characters 
					characters={ characters } 
					handleGuess={ this.handleGuess } 
					color={ color }
				/>
				<Footer />
			</main>
   		)
  	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(App))