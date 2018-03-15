import React, { Component } from 'react';
import './index..css';

import Button from '../Button';
import InputTimer from '../InputTimer';
import Clock from '../Clock';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: '',
			countdown: null,
			display: ''
		};

		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick(data) {
		this.setState({
			seconds: data
		});

		this.timer(data);
	}

	timer(seconds) {
		clearInterval(countdown);

		const now = Date.now();
		const then = now + seconds * 1000;

		this.displayTimeLeft(seconds);
		// displayEndTime(then);

		let countdown = setInterval(() => {
			const secondsLeft = Math.round((then - Date.now()) / 1000);

			if (secondsLeft < 0) {
				clearInterval(countdown);
				return;
			}
			this.displayTimeLeft(secondsLeft);
		}, 1000);
	}

	displayTimeLeft(seconds) {
		const minutes = Math.floor(seconds / 60);
		const remainderSeconds = seconds % 60;
		const display = `${minutes}:${
			remainderSeconds < 10 ? '0' : ''
		}${remainderSeconds}`;

		this.setState({
			display: display
		});
		console.log(this.state);
	}

	render() {
		return (
			<div className="timer">
				<div className="timer__contols">
					<Button
						handleButtonClick={this.handleButtonClick}
						time={20}
					>
						20 Secs
					</Button>
					<Button time={300}>Work 5</Button>
					<Button time={900}>Quick 15</Button>
					<Button time={1200}>Snack 20</Button>
					<Button time={3600}>Lunch Break</Button>
					<InputTimer />
				</div>
				<Clock display={this.state.display} />
			</div>
		);
	}
}

export default App;
