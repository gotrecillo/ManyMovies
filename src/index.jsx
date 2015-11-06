import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import init from './utils/init';

require('./style.css');
require('bootstrap/dist/css/bootstrap.min.css');

const store = init();

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
