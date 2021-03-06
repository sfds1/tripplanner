import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SignUp from '../SignUp';
import SignOut from '../SignOut';
import SignIn from '../SignIn';
import Main from '../../components/Main';
import User from '../../components/User';
import Dashboard from '../../components/Dashboard';
import Profile from '../Profile';
import Hotspots from '../Hotspots';
import FindFriend from '../FindFriend';
import Trips from '../Trips';
import NewTrip from '../NewTrip';
import CurrentTrip from '../CurrentTrip';
import CurrentCategory from '../CurrentCategory'


import { connect } from 'react-redux';

// import Navbar from './../../components/Navbar';


class App extends Component {

  render () {
    return (
      <div className="container">

          {/* <Navbar isLoggedIn={this.props.authenticated}/> */}
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signout' component={SignOut}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path="/" component={Main} />
          <Route exact path="/user" component={User} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/hotspots" component={Hotspots} />
          <Route exact path="/findfriend" component={FindFriend} />
          <Route exact path="/trips" component={Trips} />
          <Route exact path="/newtrip" component={NewTrip} />
          <Route exact path="/currenttrip/:id" component={CurrentTrip} />
          <Route exact path="/currentCategory/:id" component={CurrentCategory} />

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(App);
