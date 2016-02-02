import React from 'react';
import Keypad from "./keypad";
import Modal from "./modal";
import { hashHistory } from 'react-router';

class Login extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			password: "",
			users: [],
			currentUser: null
		};
	}

	updatePassword(value) {
		this.setState({password: value});
	}

	userClicked(user) {
		this.refs.keypad.clearValue();
		this.setState({currentUser: user, password: ""}, function () {
			this.refs.modal.show();
		});
	}

	componentDidMount() {
		$.ajax({
			url: "/api/v1.0/user/all",

			success: $.proxy(function (users) {
				this.setState({
					users: users
				});
			}, this)
		});
	}

	handlePassChange(e) {
		this.setState({password: e.target.value});
	}

	login() {
		$.ajax({
			url: "/api/v1.0/user/login",
			method: "POST",
			dataType: "json",
			data: {
				username: this.state.currentUser.username,
				password: this.state.password
			},
			success: $.proxy(function () {
				localStorage.setItem("user", JSON.stringify(this.state.currentUser));
				hashHistory.push("/");
			}, this),
			error: $.proxy(function () {
				console.error("Invalid user / password");
			}, this)
		});

		console.log("Login:", this.state.currentUser, this.state.password);
	}

	render() {
		var self = this;

		var usersList = this.state.users.map(function (user) {
			return (
				<div className="column userItem" key={user.id} onClick={self.userClicked.bind(self, user)}>
					<div className="ui fluid card">
						<div className="image">
							<img src="/static/img/defaultAvatar.png" />
						</div>
						<div className="content">
							<a className="header">{user.name}</a>
						</div>
					</div>
				</div>
			);
		});

		return (
			<div id="loginView">
				<h1>Login</h1>
				<div id="usersList" className="ui three column grid">
					{usersList}
				</div>

				<Modal ref="modal" onOk={this.login.bind(this)}>
					<div id="loginModalPicture">
						<img src="/static/img/defaultAvatar.png" className="avatar"/>
						<div>
							{this.state.currentUser && this.state.currentUser.name}
						</div>
					</div>

					<div id="loginModalKeypad">
						<div className="ui left icon input large">
							<input type="password" value={this.state.password} onChange={this.handlePassChange}/>
							<i className="lock icon" />
						</div>

						<Keypad ref="keypad" onChange={this.updatePassword.bind(this)} />
					</div>
				</Modal>
			</div>
		);
	}
}

module.exports = Login;
