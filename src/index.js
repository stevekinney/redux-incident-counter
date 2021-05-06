import React from 'react';
import ReactDOM from 'react-dom';

import Application from './Application';

import './index.scss';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Application />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
