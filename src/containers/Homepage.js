import React, { Component } from 'react';
import Header from '../components/Header';

export default class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <Header />
        <div className="container">
          Homepage
        </div>
      </div>
    );
  }
}

