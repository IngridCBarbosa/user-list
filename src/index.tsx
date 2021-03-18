import * as React from 'react';
import * as ReactDOM from 'react-dom';

import dayjs from 'dayjs';

import {
  Provider,
} from 'react-redux';

import {
  HashRouter,
} from 'react-router-dom';

import Routes from './Routes';

import configureStore from './store/configureStore';

import reportWebVitals from './reportWebVitals';

import 'antd/dist/antd.less';

dayjs.locale('pt-br');

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Routes />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
