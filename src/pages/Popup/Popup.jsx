import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
     <h1>Welcome Here</h1>
     <h3>Login</h3>
  <div className="login">
     <div className="login_username">
       <label>Username:</label>
       <input type="text"/>
     </div>
     <div className="login_pasword">
       <label>Password:</label>
       <input type="password"/>
     </div>
     <button type="submit">Login</button>
    </div>
  </div>
  );
};

export default Popup;
