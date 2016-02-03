import React from 'react';
import { hashHistory } from 'react-router';

class SuperScreen extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			user: {}
		};
	}

	componentDidMount() {
	}

	gotoLogin() {
		hashHistory.push("/login");
	}

	render() {

		var products = [
			{id: 1, name: "Far Golf 4"},
			{id: 2, name: "Far Golf 4"},
			{id: 3, name: "Far Golf 5"}
		];

		var productOptions = products.map(function (product) {
			return (
				<option value={product.id} key={product.id}>{product.name}</option>
			);
		});

		return (
			<div id="mainView">
				<div className="ui grid">
					<div className="sixteen wide column" id="logoutWrap">
						<button className="ui primary button" onClick={this.gotoLogin.bind(this)}>
							<i className="user icon"></i>
							Change user
						</button>
					</div>
				</div>

				<div className="ui grid">
					<div className="fourteen wide column">
						<label>Product</label>
						<select className="ui fluid normal dropdown">
							<option value="">-- Select product --</option>
							{productOptions}
						</select>
					</div>

					<div className="two wide column padded" id="logoutWrap">
						<button className="ui icon green button" onClick={this.gotoLogin.bind(this)}>
							<i className="add square icon"></i>
						</button>
					</div>
				</div>

			</div>
		);
	}
}

module.exports = SuperScreen;
