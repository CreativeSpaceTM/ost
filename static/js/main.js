import React from 'react';
import { hashHistory } from 'react-router';

class Main extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			user: {name: "nicu"}
		};
	}

	componentDidMount() {
		var user = JSON.parse(localStorage.getItem("user"));
		console.log(user);
		this.setState({
			user: user
		});
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
					<div className="twelve wide column">
						<label>Product</label>
						<select className="ui fluid normal dropdown">
							<option value="">-- Select product --</option>
							{productOptions}
						</select>
					</div>

					<div className="four wide column" id="logoutWrap">
						<label>&nbsp;</label>
						<div>
							<button className="ui primary button" onClick={this.gotoLogin.bind(this)}>
								<i className="user icon"></i>
								Change user
							</button>
						</div>
					</div>
				</div>

				<div className="ui grid" id="typeSelectionWrap">
					<div className="twelve wide column">
						<label>Select side</label>
						<div>
							<div className="ui buttons">
								<button className="ui button huge">Left</button>
								<button className="ui button huge">Neutral</button>
								<button className="ui button huge">Right</button>
							</div>
						</div>
					</div>
					</div>

			</div>
		);
	}
}

module.exports = Main;
