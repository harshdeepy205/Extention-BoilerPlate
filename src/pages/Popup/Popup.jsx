import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import Login from '../login/Login';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <Login/>
    </div>
  );
};

export default Popup;
