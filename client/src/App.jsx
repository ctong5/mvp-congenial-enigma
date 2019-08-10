import React from 'react';
import Landing from './Landing';
import NavBar from './NavBar';
import Signup from './Signup';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: false,
    };
    this.handleSignUpClick = this.handleSignUpClick.bind(this);
  }

  handleSignUpClick() {
    this.setState({
      signup: true,
    });
  }

  render() {
    let currentview;
    if (this.state.signup) {
      currentview = <Signup />
    } else {
      currentview = <Landing />
    }
    return(
      <div>
        <div>
          <NavBar handleSignUpClick={this.handleSignUpClick}/>
        </div>
  
        <div>
          {currentview}
        </div>
      </div>
    );
  }
};

export default App;