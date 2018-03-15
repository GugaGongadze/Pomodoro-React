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

		let countdown;
		this.handleSecondsData = this.handleSecondsData.bind(this);
	}

	handleSecondsData(data) {
		this.setState({
			seconds: data
		});

		this.timer(data);
	}

	timer(seconds) {
		clearInterval(this.countdown);

		const now = Date.now();
		const then = now + seconds * 1000;

		this.displayTimeLeft(seconds);

		this.countdown = setInterval(() => {
			const secondsLeft = Math.round((then - Date.now()) / 1000);

			if (secondsLeft < 0) {
				clearInterval(this.countdown);
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
	}

	render() {
		return (
			<div className="timer">
				<div className="timer__controls">
					<Button
						handleButtonClick={this.handleSecondsData}
						time={20}
					>
						20 Secs
					</Button>
					<Button
						handleButtonClick={this.handleSecondsData}
						time={300}
					>
						Work 5
					</Button>
					<Button
						handleButtonClick={this.handleSecondsData}
						time={900}
					>
						Quick 15
					</Button>
					<Button
						handleButtonClick={this.handleSecondsData}
						time={1200}
					>
						Snack 20
					</Button>
					<Button
						handleButtonClick={this.handleSecondsData}
						time={3600}
					>
						Lunch Break
					</Button>

					<InputTimer handleSubmit={this.handleSecondsData} />
				</div>
				<Clock display={this.state.display} />
			</div>
		);
	}
}

export default App;
