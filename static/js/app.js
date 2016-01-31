import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import { Router, Route, hashHistory } from 'react-router';

class App extends React.Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}


ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="login" component={Login}/>
 		</Route>
	</Router>
), document.getElementById("app"));
