import React, { Component } from 'react';

export default class LogoIMG extends Component {
	render() {
		return (
			<div className="logo_div">
				<img src={require('../image/a.png')} alt="logo" className="logo" />
			</div>
		);
	}
}
