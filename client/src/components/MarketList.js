import React, { Component } from 'react';
import { Container, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

class MarketList extends Component {
	state = {
		item: [],
		modal: false,
		num: 0,
		mapA: 0,
		sub: 0,
		itemN: '',
		quantity: '',
		amount: ''
	};

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();

		// Close modal
		this.toggle();
	};

	render() {
		const { item } = this.state;

		return (
			<Container>
				<div>
					<Button outline="true" color="success" style={{ marginBottom: '2rem' }} onClick={this.toggle}>
						Add Item
					</Button>

					<Modal isOpen={this.state.modal} toggle={this.toggle}>
						<ModalHeader toggle={this.toggle}>Add To Market List</ModalHeader>
						<ModalBody>
							<Form onSubmit={this.onSubmit}>
								<FormGroup>
									<Label for="item">Item</Label>
									<Input
										type="text"
										name="itemN"
										id="item"
										placeholder="Add Market item"
										value={this.state.itemN}
										onChange={this.onChange}
									/>
									<Label for="amount">Amount</Label>
									<Input
										type="text"
										name="amount"
										value={this.state.amount}
										id="amount"
										placeholder="Add Item Amount"
										onChange={this.onChange}
									/>
									<Label for="Quantity">Quantity</Label>
									<Input
										type="text"
										name="quantity"
										value={this.state.quantity}
										id="amount"
										placeholder="Add Item Quantity"
										onChange={this.onChange}
									/>
									<Button
										outline="true"
										color="success"
										style={{ marginTop: '2rem' }}
										block
										onClick={() => {
											const name = this.state.itemN;
											const amount = parseInt(this.state.amount);
											const quantity = this.state.quantity;

											if (name && amount && quantity) {
												this.setState((state) => ({
													item: [ ...state.item, { id: uuid(), name, amount, quantity } ]
												}));
												this.toggle();

												this.setState((state) => ({ num: state.num + amount }));
											}
										}}
									>
										Add Item
									</Button>
								</FormGroup>
							</Form>
						</ModalBody>
					</Modal>
				</div>
				<ListGroup>
					<div className="HeaderD">
						<Label> Item Name</Label>
						<Label>Item Quantity</Label>

						<Label> Amount</Label>
					</div>
					<TransitionGroup className="shopping-list">
						{item.map(({ id, name, amount, quantity }) => (
							<CSSTransition key={id} timeout={500} classNames="fade">
								<ListGroupItem>
									<Button
										className="remove-btn"
										color="danger"
										size="sm"
										onClick={() => {
											this.setState((state) => ({
												item: state.item.filter((item) => item.id !== id),
												mapA: (state.mapA = state.item.filter((item) => {
													if (item.id === id) {
														return item.amount;
													}
												})),
												sub: state.mapA.map((i) => i.amount),
												num: (state.num = state.num - state.sub)
											}));
										}}
									>
										&times;
									</Button>

									<span className="nameS">{name}</span>
									<span className="quantityS">{quantity}</span>
									<span className="amountS">{`${amount}$`}</span>
									<span className="editS">Edit me</span>
								</ListGroupItem>
							</CSSTransition>
						))}
					</TransitionGroup>
				</ListGroup>

				{this.state.num > 1 && this.state.item.length > 1 ? (
					<div className="TotalD">
						<h3 className="Totalh3">Total</h3>
						<h4 className="Totalh4">{this.state.num - this.state.sub}</h4>
					</div>
				) : (
					''
				)}
			</Container>
		);
	}
}

export default MarketList;
