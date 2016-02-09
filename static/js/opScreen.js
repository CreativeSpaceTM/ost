import React from 'react';
import _ from "lodash";
import { hashHistory } from 'react-router';

import utils from "./utils";
import Modal from "./modal";

const SIDE = {
	LEFT: "left",
	RIGHT: "right"
};

class ProductItem extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			side: null
		};

		this.state = _.extend(this.state, props.info);
	}

	setSide(side) {
		this.setState({
			side: side
		});
	}

	setOk() {
		this.setState({
			side: null
		});
	}

	setNotOk() {
		this.refs.modal.show();
	}

	setDefect() {
		this.setState({
			side: null
		});
		console.log("Defectomundo");
	}

	render() {
		return (
			<div className="productItem">
				<div className="section">
					<h2>{this.state.name}</h2>
				</div>

				<div className="section">
					<div className="ui buttons">
						<button className={"ui button huge" + (this.state.side === SIDE.LEFT ? " active" : "")}
						        onClick={this.setSide.bind(this, SIDE.LEFT)}>
							Left
						</button>
						<button className={"ui button huge" + (this.state.side === SIDE.RIGHT ? " active" : "")}
						        onClick={this.setSide.bind(this, SIDE.RIGHT)}>
							Right
						</button>
					</div>
				</div>

				<div className="section" hidden={!this.state.side}>
						<button className="ui button green huge"
						        onClick={this.setOk.bind(this)}>
							Ok
						</button>
						<button className="ui button red huge"
						        onClick={this.setNotOk.bind(this)}>
							Not Ok
						</button>
				</div>

				<Modal ref="modal" onOk={this.setDefect.bind(this)}>
					<select>
						<option>One</option>
						<option>Two</option>
						<option>Three</option>
					</select>
				</Modal>
			</div>
		);
	}
}

class OpScreen extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			products: [],
			user: {}
		};
	}

	componentWillReceiveProps() {
		this.state.user = JSON.parse(localStorage.getItem("user"));

		var storedProducts = localStorage.getItem("products");

		if (storedProducts) {
			this.state.products = JSON.parse(storedProducts);
		}
	}

	componentDidMount() {
		utils.redirectToUserView();
	}

	gotoLogin() {
		hashHistory.push("/login");
	}

	render() {

		var productItems = this.state.products.map(function (product) {
			return (
				<ProductItem info={product} key={product.id}></ProductItem>
			);
		});

		return (
			<div id="opView">
				<link href="/static/css/opScreen.css" rel="stylesheet" />
				<div id="userHeader">
					<button className="ui primary button"
					        onClick={this.gotoLogin.bind(this)}>
						<i className="user icon"></i>
						Change user
					</button>
					<h3>Operator: <b>{this.state.user.name}</b></h3>
				</div>
				{productItems}
			</div>
		);
	}
}

module.exports = OpScreen;
