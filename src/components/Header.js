import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link to="/"><div className="navbar-brand">Social React</div></Link>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/login"><div className="btn btn-info">Login</div></Link></li>
              </ul>
            </div>{/* /.navbar-collapse */}
          </div>{/* /.container-fluid */}
        </nav>

    );
  }
}

