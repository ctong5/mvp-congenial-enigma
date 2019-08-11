import React from 'react';
import Landing from './Landing';
import NavBar from './NavBar';
import Signup from './Signup';
import Login from './Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
    };
    this.handleClickSignup = this.handleClickSignup.bind(this);
    this.handleClickHome = this.handleClickHome.bind(this);
    this.handleClickLogin = this.handleClickLogin.bind(this);
  }

  handleClickSignup() {
    this.setState({
      page: 'signup',
    });
  }

  handleClickHome() {
    this.setState({
      page: 'home',
    });
  }

  handleClickLogin() {
    this.setState({
      page: 'login',
    });
  }

  render() {
    let currentview;
    if (this.state.page === 'signup') {
      currentview = <Signup />
    } else if (this.state.page === 'home') {
      currentview = <Landing />
    } else if (this.state.page === 'login') {
      currentview = <Login />
    }

    return(
      <div>
        <div>
          <NavBar handleClickSignup={this.handleClickSignup} handleClickHome={this.handleClickHome} handleClickLogin={this.handleClickLogin}/>
        </div>
  
        <div>
          {currentview}
        </div>
      </div>
    );
  }
};

export default App;