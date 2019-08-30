// import React from 'react';
// import Modal from 'react-modal';
// import Signup from './Signup';
// import Login from './Login';

// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };

// Modal.setAppElement('#root')

// class DualSignupLogin extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modalIsOpen: false,
//     };
//     this.openModal = this.openModal.bind(this);
//     this.afterOpenModal = this.afterOpenModal.bind(this);
//     this.closeModal = this.closeModal.bind(this);
//   }

//   openModal() {
//     this.setState({modalIsOpen: true});
//   }
 
//   afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     this.subtitle.style.color = '#f00';
//   }
 
//   closeModal() {
//     this.setState({modalIsOpen: false});
//   }

//   render() {
//     return (
//       <div className="dualSignupLogin">
// {/*        <button>Sign Up</button>
//         <button>Login</button>
//         <div><Signup /> SIGNUP HERE</div>
// <div><Login /> ALSO LOGIN HERE</div> */}

//         <div>
//           <button onClick={this.openModal}>SIGN UP</button>
//           <Modal
//             isOpen={this.state.modalIsOpen}
//             onAfterOpen={this.afterOpenModal}
//             onRequestClose={this.closeModal}
//             style={customStyles}
//             contentLabel="Example Modal"
//           >

//             <h2 ref={subtitle => this.subtitle = subtitle}>Sign Up</h2>
//             <form>
//               <input type="text" name="email" placeholder="Email" onChange={(e) => this.handleChange(e)} /> 
//               <input type="text" name="password" placeholder="Password" />
//               <button onClick={this.submitForm}>Sign Up</button>
//             </form>
//             <button onClick={this.closeModal}>close</button>
//           </Modal>
//         </div>

//         <div>
//           <button onClick={this.openModal}>LOGIN</button>
//           <Modal
//             isOpen={this.state.modalIsOpen}
//             onAfterOpen={this.afterOpenModal}
//             onRequestClose={this.closeModal}
//             style={customStyles}
//             contentLabel="Example Modal"
//           >

//             <h2 ref={subtitle => this.subtitle = subtitle}>LOGIN</h2>
//             <form>
//               <input type="text" name="email" placeholder="Email" onChange={(e) => this.handleChange(e)} /> 
//               <input type="text" name="password" placeholder="Password" />
//               <button onClick={this.submitForm}>Sign Up</button>
//             </form>
//             <button onClick={this.closeModal}>close</button>
//           </Modal>
//         </div>


//       </div>
//     );
//   }
// }

// export default DualSignupLogin;