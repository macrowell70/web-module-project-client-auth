import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/friendslist">Friends List</Link>
      </nav>
        <h2>Client Auth Project</h2>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/friendslist" component={FriendsList} />
        </Switch>
    </div>
  );
}

export default App;
