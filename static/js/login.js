import React from 'react';
import Keypad from "./keypad";

class Login extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			password: ""
		};
	}

	updatePassword(value) {
		this.setState({password: value});
	}

	render() {
		return (
			<div>
				<h1>Login</h1>
				<input type="password" value={this.state.password}/>
				<Keypad onChange={this.updatePassword.bind(this)} />
			</div>
		);
	}
}

module.exports = Login;
