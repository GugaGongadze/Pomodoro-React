import React, { Component } from 'react';
import './index..css';

import Button from '../Button';
import InputTimer from '../InputTimer';
import Clock from '../Clock';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="timer">
				<div className="timer__contols">
					<Button time={20}>20 Secs</Button>
					<Button time={300}>Work 5</Button>
					<Button time={900}>Quick 15</Button>
					<Button time={1200}>Snack 20</Button>
					<Button time={3600}>Lunch Break</Button>
					<InputTimer />
				</div>
				<Clock />
			</div>
		);
	}
}

export default App;
