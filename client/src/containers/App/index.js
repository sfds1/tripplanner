import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import AllTodosList from '../AllTodosList';
import UserTodoList from '../UserTodoList';

import SignUp from '../SignUp';
import SignOut from '../SignOut';
import SignIn from '../SignIn';
import Main from '../../components/Main';
import User from '../../components/User';


import { connect } from 'react-redux';

// import io from 'socket.io-client';



import Navbar from './../../components/Navbar';


class App extends Component {
  //
  // state = {
  //   socket: io()
  // }
  render () {
    return (
      <div className="container">

          {/* <Navbar isLoggedIn={this.props.authenticated}/> */}
          <Route exact path='/usertodos' component={UserTodoList}/>
          <Route exact path='/alltodos' component={AllTodosList}/>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signout' component={SignOut}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path="/" component={Main} />
          <Route exact path="/user" component={User} />


      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(App);
