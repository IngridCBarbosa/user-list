import * as React from 'react';

import {
  Card,
} from 'antd';

import {
  IUser,
} from '../../store/user/types';

import {
  getUserFullName,
} from './utils';

import './UserCard.less';

export interface IUserCardProps {
  user: IUser;
  onClick(userID: string): void;
}

const UserCard: React.FC<IUserCardProps> = ({
  user,
  onClick,
}) => (
  <Card
    hoverable
    className="user-card"
    onClick={() => onClick(user.id)}
    cover={<img alt={user.email} src={user.picture} />}
  >
    <Card.Meta
      description={user.email}
      title={getUserFullName(user)}
    />
  </Card>
);

export default UserCard;
