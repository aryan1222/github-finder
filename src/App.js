import React, { Fragment } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/SearchUser';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
      <BrowserRouter>
        <Navbar/>
        <div className="container">
          <Alert/>
          <Switch>
            <Route exact path='/' render={() => (
              <Fragment>
                <Search/>
                <Users/>
              </Fragment>
            )} />

            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' render={props => (
              <User {...props}/>
            )} />


          </Switch>
        </div>
      </BrowserRouter>
      </AlertState>
    </GithubState>
  )

}

export default App;
