import React, { Component } from 'react';
import './index..css';

class Button extends Component {
	constructor(props) {
		super(props);

		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick(event) {
		this.props.handleButtonClick(this.props.time);
	}

	render() {
		return (
			<button
				data-time={this.props.time}
				className="timer__button"
				onClick={this.onButtonClick}
			>
				{this.props.children}
			</button>
		);
	}
}

export default Button;
