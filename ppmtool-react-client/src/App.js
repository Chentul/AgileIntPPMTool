import React from 'react';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Dashboard />
		</div>
	);
}

export default App;
