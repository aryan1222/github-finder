import React, { Fragment, useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/SearchUser';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';

const App = () => {
  
  const [alert, setAlert] = useState(null);

  

  const showAlert = (msg, type) => {
    setAlert({msg : msg, type: type})
    
    setTimeout(() => setAlert(null), 5000);
  }

  return (
    <GithubState>
      <BrowserRouter>
        <Navbar/>
        <div className="container">
          <Alert alert={alert}/>
          <Switch>
            <Route exact path='/' render={() => (
              <Fragment>
                <Search 
                         setAlert={showAlert}/>
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
    </GithubState>
  )

}

export default App;
