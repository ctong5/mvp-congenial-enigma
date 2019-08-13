import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  handleChange(e) {
    console.log("value: ", e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // function to pass state to handleSubmitLogin
  submitLogin(e) {
    this.props.loginUser(e, this.state);
  }

  render() {
    return (
      <div className="login">
        <div className="loginWelcomeForm">
          <div>Welcome back, let's login!</div>
          <form>
            <input type="text" name="email" placeholder="email" onChange={(e) => this.handleChange(e)} /> 
            <input type="text" name="password" placeholder="password" onChange={(e) => this.handleChange(e)}/>
            <button onClick={(e) => this.submitLogin(e)}>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }  
};

export default Login;