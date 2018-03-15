import React, { Component } from 'react';
import './index..css';

import Button from '../Button';

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
					{/* <button data-time="20" className="timer__button">
						20 Secs
					</button>
					<button data-time="300" className="timer__button">
						Work 5
					</button>
					<button data-time="900" className="timer__button">
						Quick 15
					</button>
					<button data-time="1200" className="timer__button">
						Snack 20
					</button>
					<button data-time="3600" className="timer__button">
						Lunch Break
					</button> */}
					<form name="customForm" id="custom">
						<input
							type="text"
							name="minutes"
							placeholder="Enter Minutes"
						/>
					</form>
				</div>
				<div className="display">
					<h1 className="display__time-left" />
					<p className="display__end-time" />
				</div>
			</div>
		);
	}
}

export default App;
