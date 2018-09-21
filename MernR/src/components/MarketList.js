import React, { Component } from 'react';
import { Container, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemAction';
import PropTypes from 'prop-types';

class MarketList extends Component {
	componentDidMount() {
		this.props.getItems();
	}

	render() {
		const { items } = this.props.item;
		return (
			<Container>
				<Button
					outline
					color="success"
					style={{ marginBottom: '2rem' }}
					onClick={() => {
						const name = prompt('enter item');
						if (name) {
							this.setState((state) => ({ items: [ ...state.items, { id: uuid(), name } ] }));
						}
					}}
				>
					Add Item
				</Button>

				<ListGroup>
					<TransitionGroup className="shopping-list">
						{items.map(({ id, name }) => (
							<CSSTransition key={id} timeout={500} classNames="fade">
								<ListGroupItem>
									<Button
										className="remove-btn"
										color="danger"
										size="sm"
										onClick={() => {
											this.setState((pevState) => ({
												items: pevState.items.filter((item) => item.id !== id)
											}));
										}}
									>
										&times;
									</Button>

									{name}
								</ListGroupItem>
							</CSSTransition>
						))}
					</TransitionGroup>
				</ListGroup>
			</Container>
		);
	}
}
MarketList.proType = {
	getItems: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	item: state.item;
};
export default connect(mapStateToProps, { getItems })(MarketList);
