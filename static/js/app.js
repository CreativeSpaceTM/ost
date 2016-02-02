import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import MainScreen from './main';
import { Router, hashHistory } from 'react-router';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			user: "ceva"
		};
	}

	componentDidMount() {
		var user = localStorage.getItem("user");
		if (user) {
			hashHistory.push("/main");
		}
		else {
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
		{path: "login", component: Login},
		{path: "main", component: MainScreen},
	]
};

ReactDOM.render(<Router history={hashHistory} routes={routes} />, document.getElementById("app"));
