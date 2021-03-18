import * as React from 'react';

import classNames from 'classnames';

import {
  Grid,
  Layout,
} from 'antd';

import './Content.less';

export interface IContentProps {
  children: React.ReactNode;
}

const Content: React.FC<IContentProps> = ({ children }) => {
  const breakpoints = Grid.useBreakpoint();

  const contentClassNames = classNames('content', {
    md: breakpoints.md,
  });

  return (
    <Layout.Content className={contentClassNames}>
      {children}
    </Layout.Content>
  );
};

export default Content;
