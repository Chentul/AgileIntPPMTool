import React from 'react';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard';
import AddProject from './components/Project/AddProject';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/addProject" component={AddProject} />
			</div>
		</Router>
	);
}

export default App;
