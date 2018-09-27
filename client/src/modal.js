import React, { Component } from 'react';
import Modal from 'react-modal'




class SModal extends Component {
 render(){
  return (
      <div className="wapper div">
      <Modal
      isOpen={this.props.selected}
      onRequestClose={this.props.okayF}
      contentLabel='selected'
      closeTimeoutMS={200}
      className='Modal'
    
      >
     <h1 className='So'>Selected Options</h1>
     {this.props.selected && <p className='Po'>{this.props.selected}</p> }
     <button className='Bo' onClick={this.props.okayF}>okay</button>
     </Modal>
      </div>


    );
  }
  }

export default SModal;