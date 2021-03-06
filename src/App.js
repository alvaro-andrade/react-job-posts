import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

// Components
import Header from './components/Header';
import NewJobPost from './components/NewJobPost';
import JobPostList from './components/JobPostList';

class App extends Component {
  render() {
    return (
      <>
        <Header title="Job Posts" />
        <Router>
          <div>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/new-post'>New Job</Link>
              </li>
            </ul>
            <Switch>
              <Route 
                exact 
                path="/new-post" 
                component={ NewJobPost }
                />
              <Route 
                path="/"
                component={ JobPostList }
              />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
