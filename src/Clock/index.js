import React, { Component } from 'react';
import './index..css';

class Clock extends Component {
	render() {
		return (
			<div className="display">
				<h1 className="display__time-left">{this.props.display}</h1>
			</div>
		);
	}
}

export default Clock;
