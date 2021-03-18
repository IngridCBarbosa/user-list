import * as React from 'react';

import classNames from 'classnames';

import {
  Grid,
  Layout,
} from 'antd';

import logo from '../../assets/img/logo.svg';

import './Header.less';

const Header: React.FC = () => {
  const breakpoints = Grid.useBreakpoint();

  const headerClassNames = classNames('header', {
    md: breakpoints.md,
  });

  return (
    <Layout.Header className={headerClassNames}>
      <img src={logo} className="logo" alt="logo" />
    </Layout.Header>
  );
};

export default Header;
