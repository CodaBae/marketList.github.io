import React, { Component } from 'react';
import './styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNav from './components/AppNav';
import MarketList from './components/MarketList';

class App extends Component {
	render() {
		return (
			<div className="wapper-div">
				<AppNav />

				<MarketList />
			</div>
		);
	}
}

export default App;
