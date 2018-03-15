import React, { Component } from 'react';
import './index..css';

class InputTimer extends Component {
	constructor(props) {
		super(props);

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		const minutes = +e.target[0].value;
		/\d/.test(minutes) === true
			? this.props.handleSubmit(minutes * 60)
			: false;
		this.timeInput.reset();
	}

	render() {
		return (
			<form
				name="customForm"
				id="custom"
				onSubmit={this.onSubmit}
				ref={input => {
					this.timeInput = input;
				}}
			>
				<input type="text" name="minutes" placeholder="Enter Minutes" />
			</form>
		);
	}
}

export default InputTimer;
