import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import withRoot from './withRoot'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Panel from './components/Panel'
import Characters from './components/Characters'
import { characters } from './characters'
import { shuffle } from './utils'

const styles = theme => ({
	root: {
		background: 'url(./img/bg.jpg) no-repeat center center fixed',
		backgroundSize: '100%',
		height: '100%'
	},
})

class App extends Component {
	state = {
		status: 'Start Playing!',
		score: 0,
		topScore: 0,
		clicked: [],
		characters,
		color: 'white',
	}

	reset() {
		const { score } = this.state
		let topScore = this.state.topScore < score ? score : this.state.topScore
		this.setState({
			score: 0,
			topScore,
			clicked: []
		})
	}

	handleGuess = (id) => {
		let guessed = this.state.clicked.includes(id)
		if(!guessed) {
			let clicked = [ ...this.state.clicked, id ]
			this.setState({
				color: 'green',
				score: this.state.score + 1,
				status: 'Correct!',
				clicked
			})
		} else {
			this.setState({
				color: 'red',
				status: 'Incorrect!'
			})
		}
		let characters = this.state.characters.map(ea => shuffle(ea))
		setTimeout(() => {
			this.setState({ characters, color: 'white' })
			if(guessed) this.reset()
		}, 300)
	}

  	render() {
		const { classes } = this.props
		const { characters, color } = this.state
    	return (
			<main className={ classes.root }>
				<Navbar { ...this.state } />
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