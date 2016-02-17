import React from 'react';
import _ from "lodash";
import { hashHistory } from 'react-router';

import utils from "./utils";
import Modal from "./modal";

import {STATUS, SIDE} from "./const";

class ProductItem extends React.Component {

	constructor(props) {
		super(props);

		this.product = props.info;

		this.state = {
		};

		this.state = _.extend(this.state, this.product);
	}

	setOk(side) {
		var status = {
			side: side,
			status: STATUS.OK
		};

		this.props.onStatusChange(this.product.id, status);
	}

	setNotOk(side) {
		this.notOkSide = side;
		this.refs.modal.show();
	}

	setDefect() {
		var status = {
			side: this.notOkSide,
			status: STATUS.NOTOK,
			defect: 1
		};

		this.props.onStatusChange(this.product.id, status);
	}

	render() {
		return (
			<div className="productItem">
				<div className="section">
					<h2>{_.capitalize(this.state.name)}</h2>
				</div>

				<div className="section">
						<label>Stanga</label>
						<button className="ui button green huge"
						        onClick={this.setOk.bind(this, SIDE.LEFT)}>
							Ok
						</button>
						<button className="ui button red huge"
						        onClick={this.setNotOk.bind(this, SIDE.LEFT)}>
							Not Ok
						</button>
				</div>

				<div className="section">
						<label>Dreapta</label>
						<button className="ui button green huge"
						        onClick={this.setOk.bind(this, SIDE.RIGHT)}>
							Ok
						</button>
						<button className="ui button red huge"
						        onClick={this.setNotOk.bind(this, SIDE.RIGHT)}>
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

		this.stats = JSON.parse(localStorage.getItem("stats") || "[]");
		this.state = {
			user: {},
			products: []
		};
	}

	componentDidMount() {
		var user = JSON.parse(localStorage.getItem("user"));
		var storedProducts = JSON.parse(localStorage.getItem("products") || "[]");

		this.setState({
			user: user,
			products: storedProducts
		});
	}

	gotoLogin() {
		hashHistory.push("/login");
	}

	setStatus(prodId, status) {
		var statEntry = {
			product: prodId,
			timestamp: String(Date.now())
		};

		statEntry = _.extend(statEntry, status);

		this.stats.push(statEntry);
		localStorage.setItem("stats", JSON.stringify(this.stats));

		$.ajax({
			url: "/api/v1.0/stat/add",
			method: "POST",
			contentType: "application/json",
			data: JSON.stringify({stats: this.stats}),
			success: $.proxy(function (response) {
				console.log("Before:", this.stats);
				if (response.added) {
					for (var f = 0; f < response.added.length; f++) {
						var added = response.added[f];
						for (var g = 0; g < this.stats.length; g++) {
							var stat = this.stats[g];
							if (stat.timestamp === added.timestamp) {
								this.stats.splice(g, 1);
								break;
							}
						}
					}
					console.log("After:", this.stats);
					localStorage.setItem("stats", JSON.stringify(this.stats));
				}
			}, this)
		});
	}

	render() {
		var self = this;

		var productItems = this.state.products.map(function (product) {
			return (
				<ProductItem info={product}
				             key={product.id}
				             onStatusChange={self.setStatus.bind(self)}>
				</ProductItem>
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
