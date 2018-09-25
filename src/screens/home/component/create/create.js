import React from 'react';
import './create.css';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
 
export default class Create extends React.Component {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    return (
      <div>
        <div className="Create">
          <button onClick={this.onOpenModal}>Create Publication</button>
        </div>
        <Modal className="CreateForm" open={open} onClose={this.onCloseModal} center>
          <h2>Create Publication</h2>
          <hr />
          Title<br />
          <input className="Input" placeholder="Title"></input>
        </Modal>
      </div>
    );
  }
}
 
ReactDOM.render(<Create />, document.getElementById('root'));