import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

var test = {
  primary: 'hello'
};

ReactDOM.render(<App primary={test} />, document.getElementById('root'));
