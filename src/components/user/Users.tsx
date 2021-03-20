import * as React from 'react';

import classNames from 'classnames';

import {
  useHistory,
} from 'react-router-dom';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  Row,
  Col,
  Grid,
  Spin,
} from 'antd';

import { LoadingOutlined } from '@ant-design/icons';

import {
  IAppState,
} from '../../store/appState';

import {
  IGetUsersState,
} from '../../store/user/types';

import {
  getUsers,
} from '../../store/user/actions';

import UserCard from './UserCard';
import UserProfileDrawer from './UserProfileDrawer';

import './Users.less';

const Users: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const breakpoints = Grid.useBreakpoint();

  const [selectedUserID, updateSelectedUserID] = React.useState('');

  React.useEffect(() => {
    dispatch(getUsers(50));
  }, [dispatch]);

  const handleUserClick = (userID: string) => {
    if (breakpoints.md) {
      updateSelectedUserID(userID);
    } else {
      history.push(`/user/${userID}`);
    }
  };

  const getUsersState = useSelector<IAppState, IGetUsersState>((state) => state.user.getUsers);

  const usersClassNames = classNames('users', {
    md: breakpoints.md,
  });

  const antIcon = <LoadingOutlined style={{ fontSize: 40, color: '#1C1C1C' }} spin />;

  return (
    <div className={usersClassNames}>
      <Spin indicator={antIcon} spinning={getUsersState.loading}>
        <Row gutter={[24, 24]}>
          {getUsersState.payload.data.map((user) => (
            <Col
              xs={12}
              md={8}
              lg={6}
              xl={4}
              xxl={3}
              key={user.id}
            >
              <UserCard
                user={user}
                onClick={handleUserClick}
              />
            </Col>
          ))}
        </Row>
      </Spin>
      <UserProfileDrawer
        userID={selectedUserID}
        onClose={() => updateSelectedUserID('')}
      />
    </div>
  );
};

export default Users;
