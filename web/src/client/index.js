import '@babel/polyfill';
import 'whatwg-fetch';
import 'sanitize.css/sanitize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2'
    }
  }
});

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider theme = { theme }>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('app')
);