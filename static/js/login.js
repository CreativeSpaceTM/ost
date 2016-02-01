import React from 'react';
import Keypad from "./keypad";
import Modal from "./modal";

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
		this.setState({currentUser: user}, function () {
			$('.ui.basic.modal')
			.modal({
				detachable: false
			})
			.modal('show');
		});
	}

	componentDidMount() {
		this.setState({
			users: [
				{id: 1, name: "Surdu Nicolae"},
				{id: 2, name: "Cristi Lupu"},
				{id: 3, name: "Mihai Dragoi"}
			]
		});
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

				<Modal>
					<div id="loginModalPicture">
						<img src="/static/img/defaultAvatar.png" className="avatar"/>
						<div>
							{this.state.currentUser && this.state.currentUser.name}
						</div>
					</div>

					<div id="loginModalKeypad">
						<div className="ui left icon input large">
							<input type="password" value={this.state.password}/>
							<i className="lock icon" />
						</div>

						<Keypad onChange={this.updatePassword.bind(this)} />
					</div>
				</Modal>
			</div>
		);
	}
}

module.exports = Login;
