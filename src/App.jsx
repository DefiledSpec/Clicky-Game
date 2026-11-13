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
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
		backgroundSize: 'cover',
	},
	content: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		paddingTop: 64, // Offsets fixed Navbar
	},
});

class App extends Component {

	state = {
		status: 'Start Playing!',
		score: 0,
		topScore: 0,
		wins: 0,
		streak: 0,
		clicked: [],
		characters,
		color: 'white',
		locked: false,
		shake: false,
		won: false,
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
		return this.state.clicked.includes(id)
	}

	handleGuess = (id) => {
		if (this.state.locked) return;

		this.setState({ locked: true });
		const { wins: curWins, score: curScore, streak: curStreak, topScore: curTop } = this.state;
		const alreadyGuessed = this.isGuessed(id);
		const shuffledCharacters = this.state.characters.map(ea => shuffle(ea));

		if (alreadyGuessed) {
			this.setState({
				color: 'red',
				status: 'Incorrect! Try again.',
				shake: true,
				won: false,
			});

			setTimeout(() => {
				this.setState({
					characters: shuffledCharacters,
					locked: false,
					color: 'white',
					shake: false,
				});
				this.reset();
			}, 500);
		} else if (curScore + 1 === 8) {
			this.setState({
				clicked: [],
				score: 0,
				wins: curWins + 1,
				streak: curStreak + 1,
				topScore: 8,
				color: 'green',
				status: 'You cleared all 8!',
				won: true,
			});

			setTimeout(() => {
				this.setState({
					characters: shuffledCharacters,
					locked: false,
					color: 'white',
				});
			}, 600);
		} else {
			const newScore = curScore + 1;
			this.setState({
				color: 'green',
				score: newScore,
				topScore: Math.max(curTop, newScore),
				status: 'Correct!',
				clicked: [ ...this.state.clicked, id ],
				won: false,
			});

			setTimeout(() => {
				this.setState({
					characters: shuffledCharacters,
					locked: false,
					color: 'white',
				});
			}, 300);
		}
	};

	render() {
		const { classes } = this.props,
			{ characters, color, clicked } = this.state
		return (
			<main className={classes.root}>
				<Navbar {...this.state} />
				<div className={classes.content}>
					<Panel won={this.state.won} wins={this.state.wins} streak={this.state.streak} />
					<Characters
						characters={characters}
						handleGuess={this.handleGuess}
						color={color}
						shake={this.state.shake}
					/>
				</div>
				<Footer />
			</main>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(App));
