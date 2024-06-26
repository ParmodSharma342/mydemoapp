import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
<div class="row">

  

  <div class="col-sm-4 text-center abc">

    <form action="#!">

      <p class="h4 mb-4 text-left">Login to continue</p>

      <p class="text-left">Signin to create, discover and connect with the global community</p>

      <label for="mail" class="in">Username</label>
      <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="Enter Username"/>
      <label for="pass" class="in">Password</label>
      <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Enter Password"/>

      <div class="d-flex justify-content-left">
        <div>
          <div class="custom-control custom-checkbox text-left">
            <input type="checkbox" class="custom-control-input" />
            <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
          </div>
        </div>
      </div>

      <button class="btn btn-info btn-block " type="submit" style="background-image: url(https://i.imgur.com/6YuRxJA.png)">LOGIN</button>
      <button class="btn btn-info btn-block my" type="submit" >Forgot Password?</button>


    </form>

  </div>


  <div class="col-sm-8 xyz text-center" style="background-image: url(https://i.imgur.com/6YuRxJA.png)">

    <i class="fa fa-user-circle fa-5x" aria-hidden="true"></i>
    <h2 class="account-text">Create Your Account</h2>
    <h4 class="account-description">Signup to create, discover and connect with the global community</h4>
    <button class="btn btn-info btn-block sign" type="submit">SIGN UP</button>

  </div>
</div>
      </div>
    );
  }
}

export default App;
