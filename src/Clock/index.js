import React, { Component } from 'react';
import './index..css';

class Clock extends Component {
	render() {
		return (
			<div className="display">
				<h1 className="display__time-left" />
				<p className="display__end-time" />
			</div>
		);
	}
}

export default Clock;
