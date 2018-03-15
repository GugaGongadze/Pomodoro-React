import React, { Component } from 'react';
import './index..css';

class App extends Component {
	render() {
		return (
			<div className="timer">
				<div className="timer__contols">
					<button data-time="20" className="timer__button">
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
					</button>
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
