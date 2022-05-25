import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/friends">Friends List</Link>
        <Link to="/friends/add">Add A Friend</Link>
      </nav>
        <h2>Client Auth Project</h2>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/friends" component={FriendsList} />
          <Route path="/friends/add" component={AddFriend} />
        </Switch>
    </div>
  );
}

export default App;
