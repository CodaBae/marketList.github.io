import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';


class ItemModal extends Component {
  state = {
   
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({  [e.target.name]: e.target.value });
  };
  


  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name
    };
    const amount = {
      name: this.state.name
    };

    
    // Close modal
    this.toggle();
  };

  render() {
    console.log(this.state.item)
    console.log(this.state.amount)
    return (
      <div>
     
      </div>
    );
  }
}



export default ItemModal;