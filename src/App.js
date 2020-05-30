import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1> Welcome to my first checkpoint in react!</h1>
      <div class="form-group">
        <p>First Name</p>
      </div>

      <input type="text" placeholder="First Name"></input>

      <div class="form-group">
        <p>Surname</p>
        <input type="text" placeholder="Surname"></input>
        <div>
          <div class="form-group">
            <p>Email</p>
            <input type="text" placeholder="Email"></input>
          </div>
          <div class="form-group">
            <p>Password</p>
            <input type="password" placeholder="Password"></input>
          </div>

          <div class="form-group"><button type="submit" class="btn btn-success">Connect</button>
            <button type="submit" class="btn btn-danger" >Cancel</button> </div>
        </div>

      </div>
      </div>
  );
}

export default App;
