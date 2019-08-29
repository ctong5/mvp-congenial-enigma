import React from 'react';
import axios from 'axios';
import Landing from './Landing';
import NavBar from './NavBar';
import Signup from './Signup';
import Login from './Login';
import HikeList from './HikeList';
import DualSignupLogin from './DualSignupLogin';
import { timingSafeEqual } from 'crypto';

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
    };
    this.handleClickSignup = this.handleClickSignup.bind(this);
    this.handleClickHome = this.handleClickHome.bind(this);
    this.handleClickLogin = this.handleClickLogin.bind(this);
    this.addUser = this.addUser.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.searchHikingProject = this.searchHikingProject.bind(this);
    this.loginUser = this.loginUser.bind(this);
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
      // add new step after new user added
      // set state to show page for logged in user
      this.setState({ currentUser: res.data})
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    const{
      page,
      searchTerm,
      hikeResults,
    } = this.state;

    let currentview;
    if (page === 'signup') {
      currentview = <Signup addUser={this.addUser}/>
      // currentview = <DualSignupLogin addUser={this.addUser}/>
    } else if (page === 'home') {
      currentview = (
        <div>

          <div>
            <Landing 
              handleSearch={this.handleSearch} 
              submitSearch={this.submitSearch} 
              searchTerm={this.state.searchTerm}
            />
          </div>

          <div>
            <HikeList hikeResults={hikeResults} />
          </div>
        
        </div>
      )
    } else if (page === 'login') {
      currentview = <Login loginUser={this.loginUser}/>
      // currentview = <DualSignupLogin addUser={this.addUser}/>
    }

    return(
      <div>
        <div>
          <NavBar 
            handleClickHome={this.handleClickHome} 
            handleClickSignup={this.handleClickSignup} 
            handleClickLogin={this.handleClickLogin}
          />
        </div>
  
        <div>
          {currentview}
        </div>
      </div>
    );
  }
};

export default App;