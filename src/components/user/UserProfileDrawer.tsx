import * as React from 'react';

import dayjs from 'dayjs';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  Spin,
  Drawer,
  Typography,
} from 'antd';

import {
  IAppState,
} from '../../store/appState';

import {
  IGetUserProfileState,
} from '../../store/user/types';

import {
  getUserProfile,
} from '../../store/user/actions';

import {
  getUserFullName,
} from './utils';

import './UserProfileDrawer.less';

export interface IUserProfileDrawerProps {
  userID: string;
  onClose(): void;
}

const UserProfileDrawer: React.FC<IUserProfileDrawerProps> = ({
  userID,
  onClose,
}) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (userID !== '') {
      dispatch(getUserProfile(userID));
    }
  }, [dispatch, userID]);

  const getUserProfileState = useSelector<IAppState, IGetUserProfileState>((store) => store.user.getUserProfile);

  const userProfile = getUserProfileState.payload;

  return (
    <Drawer
      width={360}
      mask={false}
      onClose={onClose}
      visible={userID !== ''}
      className="user-profile-drawer"
    >
      <Spin spinning={getUserProfileState.loading}>
        <div className="content">
          <img className="picture" src={userProfile.picture} alt={userProfile.email} />
          <div className="gradient" />
          <div className="info">
            <Typography.Title level={4} className="name">{getUserFullName(userProfile)}</Typography.Title>
            <Typography.Paragraph className="email">{userProfile.email}</Typography.Paragraph>
            <div className="two-columns">
              <div className="gender">
                <Typography.Text className="label">Gender</Typography.Text>
                <Typography.Text className="value">{userProfile.gender}</Typography.Text>
              </div>
              <div className="phone">
                <Typography.Text className="label">Phone</Typography.Text>
                <Typography.Text className="value">{userProfile.phone}</Typography.Text>
              </div>
            </div>
            <div className="two-columns">
              <div className="date-of-birth">
                <Typography.Text className="label">Date of birth</Typography.Text>
                <Typography.Text className="value">{dayjs(userProfile.dateOfBirth).format('DD MMM YYYY')}</Typography.Text>
              </div>
              <div className="register-date">
                <Typography.Text className="label">Register date</Typography.Text>
                <Typography.Text className="value">{dayjs(userProfile.registerDate).format('DD MMM YYYY')}</Typography.Text>
              </div>
            </div>
            <div className="location">
              <Typography.Text className="label">Address</Typography.Text>
              <Typography.Paragraph className="value">{`${userProfile.location.country}, ${userProfile.location.state}, ${userProfile.location.city}`}</Typography.Paragraph>
              <Typography.Paragraph className="value">{userProfile.location.street}</Typography.Paragraph>
            </div>
          </div>
        </div>
      </Spin>
    </Drawer>
  );
};

export default UserProfileDrawer;
