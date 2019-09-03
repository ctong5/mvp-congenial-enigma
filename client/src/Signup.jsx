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
      <div className="signup">
        <div className="signupWelcomeForm">
          <div>Welcome, let's get signed up!</div>
          <form>
            <input type="text" name="email" placeholder="email" value={this.state.email} onChange={(e) => this.handleChange(e)} /> 
            <input type="password" name="password1" placeholder="password" value={this.state.password1}onChange={(e) => this.handleChange(e)}/>
            <input type="password" name="password2" placeholder="retype password" value={this.state.password2}onChange={(e) => this.handleChange(e)}/>
            {/*<input type="submit" value="Sign Up" onClick={this.props.handleSubmitSignup}/>*/}
            <button onClick={(e) => this.submitSignup(e)}>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }  
};

export default Signup;