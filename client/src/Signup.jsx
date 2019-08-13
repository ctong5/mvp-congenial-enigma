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
    console.log("value: ", e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // function to pass state to handleSubmitSignup
  submitSignup(e) {
    this.props.addUser(e, this.state);
  }

  render() {
    return (
      <div className="signup">
        <div className="signupWelcomeForm">
          <div>Welcome, let's get signed up!</div>
          <form>
            <input type="text" name="email" placeholder="email" onChange={(e) => this.handleChange(e)} /> 
            <input type="text" name="password1" placeholder="password" onChange={(e) => this.handleChange(e)}/>
            <input type="text" name="password2" placeholder="retype password" onChange={(e) => this.handleChange(e)}/>
            {/*<input type="submit" value="Sign Up" onClick={this.props.handleSubmitSignup}/>*/}
            <button onClick={(e) => this.submitSignup(e)}>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }  
};

export default Signup;