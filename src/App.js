import React, { Fragment, useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/SearchUser';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';

const App = () => {
  
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState(null);

  const searchUser = async text =>{
    setLoading(true);
    
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}
                                  &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
    
    setUsers(res.data.items);
    setLoading(false);
  }

  const getUser = async (username) => {
    setLoading(true);
    
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}
                                  &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
    
    setUser(res.data);
    setLoading(false);

  }

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }

  const showAlert = (msg, type) => {
    setAlert({msg : msg, type: type})
    
    setTimeout(() => setAlert(null), 5000);
  }

  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container">
        <Alert alert={alert}/>
        <Switch>
          <Route exact path='/' render={() => (
            <Fragment>
              <Search searchUser={searchUser} clearUsers={clearUsers} 
                      showClear={users.length > 0 ? true: false} setAlert={showAlert}/>
              <Users loading={loading} users={users}/>
            </Fragment>
          )} />

          <Route exact path='/about' component={About} />
          <Route exact path='/user/:login' render={props => (
            <User {...props} getUser={getUser} user={user} loading={loading}/>
          )} />


        </Switch>
      </div>
    </BrowserRouter>
  )

}

export default App;
