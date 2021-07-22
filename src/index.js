import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Application from './Application';

import './index.scss';
import { store } from './store';

// wrapping our app with redux store so the whole app is aware of it and any component can use values as needed
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Application />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
