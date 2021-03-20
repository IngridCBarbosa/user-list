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
