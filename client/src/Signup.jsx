import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password1: '',
      password2: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // function to pass state to handleSubmitSignup
  submitSignup(e) {
    this.props.addUser(e, this.state);
    this.setState({
      email: '',
      password1: '',
      password2: '',
    })
  }

  render() {
    return (
      <div className='signupContainer'>
        <div className='signupGreetingForm'>
          <div className='signupGreeting'>WELCOME!<br/>LET'S GET SIGNED UP</div>
          <form className='signupForm' onSubmit={(e) => this.submitSignup(e)}>
            <input type="email" name="email" placeholder="email" required value={this.state.email} onChange={(e) => this.handleChange(e)} /> 
            <input type="password" name="password1" placeholder="password" minLength="8" required value={this.state.password1} onChange={(e) => this.handleChange(e)}/>
            <input type="password" name="password2" placeholder="retype password" minLength="8" required value={this.state.password2} onChange={(e) => this.handleChange(e)}/>
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }  
};

export default Signup;