import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
  }

  handleChange(e) {
    console.log("handlechange firstname: ", e.target.name)
    console.log("id: ", e.target.id)
    console.log("value: ", e.target.value)
    // e.preventDefault();
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
            <input type="text" name="email" placeholder="Email" onChange={(e) => this.handleChange(e)} /> 
            <input type="text" name="password" placeholder="Password" onChange={(e) => this.handleChange(e)}/>
            {/*<input type="submit" value="Sign Up" onClick={this.props.handleSubmitSignup}/>*/}
            <button onClick={(e) => this.submitSignup(e)}>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }  
};

export default Signup;