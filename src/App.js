import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './containers/Homepage';
import LoginPage from './containers/LoginPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Homepage} />
          <Route path="/login" exact component={LoginPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
