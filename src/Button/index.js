import React, { Component } from 'react';
import './index..css';

class Button extends Component {
	render() {
		return (
			<button data-time={this.props.time} className="timer__button">
				{this.props.children}
			</button>
		);
	}
}

export default Button;
