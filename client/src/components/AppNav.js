import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import LogoIMG from '../components/LogoIMG';
export default class AppNav extends Component {
	state = {
		isOpen: false
	};

	toggle = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<div className="MainNav_div">
			
				<Navbar expand="sm" >
					<Container>
						<div href="/" className="logoD">
						
							<LogoIMG />
						</div>

					</Container>
				
	</Navbar>

					<div href="/" className="NavR">
				
					<NavLink href="https://twitter.com/ijeoma_s_mathew"> @CodaBae </NavLink>
				</div>
				<div href="/" className="CodaBae">
				
					<NavLink href="https://twitter.com/ijeoma_s_mathew"> @CodaBae </NavLink>
				</div>

			
			</div>
		);
	}
}
