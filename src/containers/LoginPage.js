import React, { Component } from 'react';
import Header from '../components/Header';

export default class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        email: '',
        password: ''
      },
      loading: false
    }
  }
  onChange(e) {
    this.setState({ data: {...this.state.data, [e.target.name]: e.target.value }})
  }
  submit(e) {
    console.log(this.state);
    e.preventDefault();
  }
  render() {
    const { data } = this.state.data;
    return (
      <div className="LoginPage">
        <Header />
        <div className="container">
          <h3>Login Page</h3>
          <form onSubmit={this.submit.bind(this)}>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input 
                className="form-control" 
                type="text" 
                name="email" 
                onChange={this.onChange.bind(this)}
                value={this.state.data.email} /> 
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input 
                className="form-control" 
                type="password" 
                name="password" 
                onChange={this.onChange.bind(this)}
                value={this.state.data.password} /> 
            </div>
            <button className="btn btn-primary" type="submit" value="Submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

