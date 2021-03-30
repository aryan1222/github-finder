import React, { Component, Fragment } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/SearchUser';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       loading : false,
       user : {},
       users : [],
       alert : null
    }
  }

  searchUser = async text =>{
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}
                                  &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
    this.setState({loading : false, users : res.data.items});
  }

  getUser = async (username) => {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}
                                  &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
    this.setState({loading : false, user : res.data});
  }

  clearUsers = () => {
    this.setState({
      users: [],
      loading : false
    })
  }

  setAlert = (msg, type) => {
    this.setState({alert : {msg : msg, type: type}});

    setTimeout(() => this.setState({alert:null}), 5000);
  }

  render() {
    const { user, users, loading} = this.state;

    return (
      <BrowserRouter>
        <Navbar/>
        <div className="container">
          <Alert alert={this.state.alert}/>
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search searchUser={this.searchUser} clearUsers={this.clearUsers} 
                        showClear={users.length > 0 ? true: false} setAlert={this.setAlert}/>
                <Users loading={loading} users={users}/>
              </Fragment>
            )} />

            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' render={props => (
              <User {...props} getUser={this.getUser} user={user} loading={loading}/>
            )} />


          </Switch>
        </div>
      </BrowserRouter>
    )
  }

}

export default App;
