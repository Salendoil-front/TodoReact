import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import Main from './hoc/Main/Main'
import Todo from './Containers/TodoCont/Todo'
import Auth from './Containers/Auth/Auth'
import { connect } from 'react-redux';
import Logout from './Components/Logout/Logout';

class App extends React.Component {

	render() {
		let routes = (
			<Switch>
				<Route path="/" component={Auth} />
				<Redirect to="/" />
			</Switch>
		)

		if (this.props.isAuth) {
			routes = (
				<Switch>
					<Route path="/" component={Todo} />
					<Route path="/auth" component={Auth} />
					<Route path="/logout" component={Logout} />
					<Redirect to="/" />
				</Switch>
			)
		}

		return (
			<div className="App">
				<Main>
					{routes}
				</Main>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		isAuth: state.auth.isAuth
	}
}

export default connect(mapStateToProps)(App)
