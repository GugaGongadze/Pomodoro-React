import React, { Component } from 'react';
import './index..css';

class InputTimer extends Component {
	render() {
		return (
			<form name="customForm" id="custom">
				<input type="text" name="minutes" placeholder="Enter Minutes" />
			</form>
		);
	}
}

export default InputTimer;
