import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Weather from './chapter2/Weather';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <Weather />
  </Provider>, window.document.getElementById('root')
);
