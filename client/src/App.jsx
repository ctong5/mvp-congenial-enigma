import React from 'react';
import axios from 'axios';
import SearchHikes from './SearchHikes';
import Home from './Home';
import NavBar from './NavBar';
import Signup from './Signup';
import Login from './Login';
import HikeList from './HikeList';
import { Router, Route, Switch, Link, NavLink, Redirect, withRouter } from 'react-router-dom';
import history from './history';
import LinkButton from './LinkButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      searchTerm: '',
      searchLat: 0,
      searchLon: 0,
      hikeResults: '',
      currentUser: '',
      redirectTo: '',
      loggedIn: false,
    };
    this.handleClickSignup = this.handleClickSignup.bind(this);
    this.handleClickHome = this.handleClickHome.bind(this);
    this.handleClickLogin = this.handleClickLogin.bind(this);
    this.addUser = this.addUser.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.searchHikingProject = this.searchHikingProject.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
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

  handleSearch(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  searchHikingProject(lat, lon, token) {
    axios.get(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&key=${token}`)
    .then(responseHiking => {
      console.log(responseHiking);
      this.setState ({
        hikeResults: responseHiking.data.trails,
      });
    })
  }

  submitSearch(e, searchTerm) {
    e.preventDefault();
    const token = this.props.searchMapbox;
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.searchTerm}.json?access_token=${token}`)
    .then(responseMapbox => {
      console.log('response from mapbox', responseMapbox);
      this.setState ({
        searchLon: responseMapbox.data.features[0].geometry.coordinates[0],
        searchLat: responseMapbox.data.features[0].geometry.coordinates[1],
        searchTerm: '',
      });
    })
    .then(() => this.searchHikingProject(this.state.searchLat, this.state.searchLon, this.props.searchHikingProject))
    .catch(function (error) {
      console.log(error);
    })
  }

  addUser(e, newuser) {
    console.log("adding new user")
    e.preventDefault();
    axios.post('/signup', {
      email: `${newuser.email}`,
      password1: `${newuser.password1}`,
      password2: `${newuser.password2}`,
    })
    .then((res)=> {
      console.log(res);
      // add new step after new user added
    })
    .catch((err) => {
      console.log(err);
    });
  }

  loginUser(e, olduser) {
    console.log("logging in user")
    e.preventDefault();
    axios.post('/login', {
      email: `${olduser.email}`,
      password: `${olduser.password}`,
    })
    .then((res)=> {
      console.log(res);
      if (res.data) {
        history.push('/searchHikes');
        this.setState({ 
          currentUser: res.data,
          redirectTo: '/login',
          loggedIn: true,
        })
      } else {
        console.log('Login error')
      }
    })
    .catch((err) => {
      console.log('Login server error: ', err);
    });
  }

  handleSignout(e) {
    e.preventDefault();
    this.setState({ 
      currentUser: '',
      loggedIn: false
    }, () => history.push('/'));
  }

  render() {
    const{
      page,
      searchTerm,
      hikeResults,
      currentUser,
    } = this.state;

    let currentview;
    if (page === 'signup') {
      currentview = <Signup addUser={this.addUser}/>
    } else if (page === 'home') {
      currentview = (
        <div>

          <div>
            <SearchHikes 
              handleSearch={this.handleSearch} 
              submitSearch={this.submitSearch} 
              searchTerm={searchTerm}
            />
          </div>

          <div>
            <HikeList hikeResults={hikeResults} />
          </div>
        
        </div>
      )
    } else if (page === 'login') {
      currentview = <Login loginUser={this.loginUser}/>
    }
    
    let isLoggedin;
    if (this.state.currentUser) {
      isLoggedin = true;
    } else {
      isLoggedin = false;
    }

    return(
      <div className='appContainer'>
        <Switch>
          <Router history={history}>
            {
              isLoggedin 
              ? <header>
                  <nav className="navbar">
                    <div className='imgLogoContainer'>
                      <NavLink exact to='/'><img className='imgLogo' src='trekit-logo-full.png' alt='trekit logo'></img></NavLink>
                    </div>
                    <div className='linkContainer'>
                      <NavLink className="linkbtn" style={{ color: 'gray' }} activeStyle={{ color: '#0DB5D6' }} onClick={this.handleSignout} to="/signout">
                        <span>Signout</span>
                      </NavLink>
                    </div>
                  </nav>
                </header>
              : <header>
                  <nav className='navbar'>
                    <div className='imgLogoContainer'>
                      <NavLink exact to='/'><img className='imgLogo' src='trekit-logo-full.png' alt='trekit logo'></img></NavLink>
                    </div>
                    <div className='linkContainer'>
                      <NavLink className="linkbtn" style={{ color: 'gray' }} activeStyle={{ color: '#0DB5D6' }} exact to='/'>
                        <span>Home</span>
                      </NavLink>
                      <NavLink className="linkbtn" style={{ color: 'gray' }} activeStyle={{ color: '#0DB5D6' }} to="/signup">
                        <span>Signup</span>
                      </NavLink>
                      <NavLink className="linkbtn" style={{ color: 'gray' }} activeStyle={{ color: '#0DB5D6' }} to='/login'>
                        <span>Login</span>
                      </NavLink>
                    </div>
                  </nav>
                </header>
            }

            <div className='homeTarget'>
              <Route
                exact path = '/'
                render={() => <Home />}
              />
            </div>

            <div className='searchTarget'>
              <Route 
                path = '/searchHikes' 
                render={() => <SearchHikes
                  handleSearch={this.handleSearch} 
                  submitSearch={this.submitSearch} 
                  searchTerm={searchTerm}
                  hikeResults={hikeResults}
                  currentUser={currentUser}
                />}
              />
            </div>

            <div className='loginTarget'>
              <Route 
                path = '/login' 
                render={() => <Login loginUser={this.loginUser} />}
              />
            </div>

            <div className='signupTarget'> 
              <Route 
                path = '/signup' 
                render={() => <Signup addUser={this.addUser} />}
              />
            </div>

          </Router>
        </Switch>
      </div>
    );
  }
};

export default App;