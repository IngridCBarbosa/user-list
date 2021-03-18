import * as React from 'react';

import {
  Drawer,
} from 'antd';

import UserProfile from './UserProfile';

import './UserProfileDrawer.less';

export interface IUserProfileDrawerProps {
  userID: string;
  onClose(): void;
}

const UserProfileDrawer: React.FC<IUserProfileDrawerProps> = ({
  userID,
  onClose,
}) => (
  <Drawer
    width={360}
    mask={false}
    onClose={onClose}
    visible={userID !== ''}
    className="user-profile-drawer"
  >
    <UserProfile userID={userID} />
  </Drawer>
);

export default UserProfileDrawer;
