import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import { Router, hashHistory } from 'react-router';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			user: null
		};
	}

	componentDidMount() {
		if (!this.state.user) {
			hashHistory.push("/login");
		}
	}

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

const routes = {
	path: "/",
	component: App,
	childRoutes: [
		{path: "login", component: Login}
	]
};

ReactDOM.render(<Router history={hashHistory} routes={routes} />, document.getElementById("app"));
