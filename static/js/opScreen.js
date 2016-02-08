import React from 'react';
import utils from "./utils";

class ProductItem extends React.Component {

	constructor(props) {
		super(props);

		this.state = props.info;
	}

	render() {
		return (
			<div className="productItem">
				{this.state.name}
				<div className="ui buttons">
					<button className="ui button">Left</button>
					<button className="ui button active">Right</button>
				</div>

				<div className="ui buttons">
					<button className="ui button green">Ok</button>
					<button className="ui button active red">Not Ok</button>
				</div>
			</div>
		);
	}
}

class OpScreen extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			products: [
				{id: 1, name: "Produs 1"},
				{id: 2, name: "Produs 2"},
				{id: 3, name: "Produs 3"}
			]
		};
	}

	componentDidMount() {
		utils.redirectToUserView();
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
				{productItems}
			</div>
		);
	}
}

module.exports = OpScreen;
