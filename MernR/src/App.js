import React, { Component } from 'react';
import './styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNav from './components/AppNav';
import MarketList from './components/MarketList';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="wapper-div">
					<AppNav />
					<MarketList />
				</div>
			</Provider>
		);
	}
}

export default App;
