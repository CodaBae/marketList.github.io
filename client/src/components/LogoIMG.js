import React, { Component } from 'react';

export default class LogoIMG extends Component {
	render() {
		return (
			<div >
				<img src={require('../image/a.jpg')} alt="logo" className="logo" />
			</div>
		);
	}
}
