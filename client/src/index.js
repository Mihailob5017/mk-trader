import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Store} from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
