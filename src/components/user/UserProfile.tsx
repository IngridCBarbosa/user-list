import * as React from 'react';

import dayjs from 'dayjs';

import {
  useParams,
} from 'react-router-dom';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  Col,
  Row,
  Spin,
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

import './UserProfile.less';

export interface IUserProfileParams {
  id?: string;
}

export interface IUserProfileProps {
  userID?: string;
}

const UserProfile: React.FC<IUserProfileProps> = ({ userID }) => {
  const dispatch = useDispatch();
  const { id } = useParams<IUserProfileParams>();

  React.useEffect(() => {
    const targetUserID = (id && id !== '') ? id : userID;
    if (targetUserID && targetUserID !== '') {
      dispatch(getUserProfile(targetUserID));
    }
  }, [dispatch, id, userID]);

  const getUserProfileState = useSelector<IAppState, IGetUserProfileState>((state) => state.user.getUserProfile);

  const userProfile = getUserProfileState.payload;

  return (
    <Spin spinning={getUserProfileState.loading}>
      <div className="user-profile">
        <img className="picture" src={userProfile.picture} alt={userProfile.email} />
        <div className="gradient" />
        <Row className="info" gutter={[24, 24]}>
          <Col span={24}>
            <Typography.Title level={4} className="name">{getUserFullName(userProfile)}</Typography.Title>
            <Typography.Paragraph className="email">{userProfile.email}</Typography.Paragraph>
          </Col>
          <Col xs={24} sm={12}>
            <Typography.Text className="label">Gender</Typography.Text>
            <Typography.Text className="value">{userProfile.gender}</Typography.Text>
          </Col>
          <Col xs={24} sm={12}>
            <Typography.Text className="label">Phone</Typography.Text>
            <Typography.Text className="value">{userProfile.phone}</Typography.Text>
          </Col>
          <Col xs={24} sm={12}>
            <Typography.Text className="label">Date of birth</Typography.Text>
            <Typography.Text className="value">{dayjs(userProfile.dateOfBirth).format('DD MMM YYYY')}</Typography.Text>
          </Col>
          <Col xs={24} sm={12}>
            <Typography.Text className="label">Register date</Typography.Text>
            <Typography.Text className="value">{dayjs(userProfile.registerDate).format('DD MMM YYYY')}</Typography.Text>
          </Col>
          <Col span={24}>
            <Typography.Text className="label">Address</Typography.Text>
            <Typography.Paragraph className="value">{`${userProfile.location.country}, ${userProfile.location.state}, ${userProfile.location.city}`}</Typography.Paragraph>
            <Typography.Paragraph className="value">{userProfile.location.street}</Typography.Paragraph>
          </Col>
        </Row>
      </div>
    </Spin>
  );
};

export default UserProfile;
