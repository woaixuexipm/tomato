// import React from 'react';
import React, { Component } from 'react';
// import Button from 'antd/es/button';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Index from './Index/Index'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
// import history from './config/histroy'

class App extends Component {
  render() {
    return (
      <Router /*history={history}*/>
        <div>
          
            {/* <ul>
              <li>
                <Link to="/">Index</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">SignUp</Link>
              </li>
            </ul> */}
          

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route exact={true} path="/">
              <Index />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
} 
export default App;