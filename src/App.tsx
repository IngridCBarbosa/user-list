import * as React from 'react';

import classNames from 'classnames';

import {
  Grid,
  Layout,
} from 'antd';

import Header from './components/layout/Header';
import Content from './components/layout/Content';

export interface IAppProps {
  children: React.ReactNode;
}

const App: React.FC<IAppProps> = ({ children }) => {
  const breakpoints = Grid.useBreakpoint();

  const appClassNames = classNames('app', {
    md: breakpoints.md,
  });

  return (
    <Layout className={appClassNames}>
      <Header />
      <Content>
        {children}
      </Content>
    </Layout>
  );
};

export default App;
