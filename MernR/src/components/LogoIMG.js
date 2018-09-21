import React, { Component } from 'react';
import { Container } from 'reactstrap';
export default class LogoIMG extends Component {
	render() {
		return (
			<div className="logo_div">
				<Container>
					<img src={require('../image/a.png')} alt="logo" className="logo" />
				</Container>
			</div>
		);
	}
}
