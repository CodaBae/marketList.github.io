import React, { Component } from 'react';
import './styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNav from './components/AppNav';

class App extends Component {
	render() {
		return (
			<div className="wapper-div">
				<AppNav />
			</div>
		);
	}
}

export default App;
