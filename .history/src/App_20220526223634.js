import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div classNameName="App">
<div className="row">
  <div className="col-sm-4 text-center abc">
    <form action="#!">
      <p className="h4 mb-4 text-left">Login to continue</p>

      <p className="text-left">Signin to create, discover and connect with the global community</p>

      <label for="mail" className="in">Username</label>
      <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="Enter Username"/>
      <label for="pass" className="in">Password</label>
      <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Enter Password"/>

      {/* <div className="d-flex justify-content-left">
        <div>
          <div className="custom-control custom-checkbox text-left">
            <input type="checkbox" className="custom-control-input" />
            <label className="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
          </div>
        </div>
      </div> */}

      {/* <button className="btn btn-info btn-block " type="submit" style="background-image: url(https://i.imgur.com/6YuRxJA.png)">LOGIN</button>
      <button className="btn btn-info btn-block my" type="submit" >Forgot Password?</button>
 */}

    </form>

  </div>


  {/* <div className="col-sm-8 xyz text-center" style="background-image: url(https://i.imgur.com/6YuRxJA.png)">

    <i className="fa fa-user-circle fa-5x" aria-hidden="true"></i>
    <h2 className="account-text">Create Your Account</h2>
    <h4 className="account-description">Signup to create, discover and connect with the global community</h4>
    <button className="btn btn-info btn-block sign" type="submit">SIGN UP</button>

  </div> */}
</div>
      </div>
    );
  }
}

export default App;
