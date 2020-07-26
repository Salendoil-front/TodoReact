import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Main from './hoc/Main/Main'
import Todo from './Containers/TodoCont/Todo'
import Auth from './Containers/Auth/Auth'

function App() {
	return (
		<div className="App">
			<Main>
				<Switch>
					<Route path="/todo" component={Todo} />
					<Route path="/" component={Auth} />
				</Switch>
			</Main>
		</div>
	);
}

export default App;
