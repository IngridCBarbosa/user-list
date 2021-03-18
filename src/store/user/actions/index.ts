import {
  Action,
} from 'redux';

import {
  ApiError,
  RSAAAction,
  createAction,
} from 'redux-api-middleware';

import {
  IUserState,
  IGetUsersState,
  IGetUsersPayload,
  IGetUserProfilePayload,
} from '../types';

import {
  DUMMY_API_APP_ID,
} from '../../../constants';

import * as UserActionTypes from './actionTypes';

export const getUsers = (limit: number): RSAAAction<IUserState, IGetUsersState, unknown> => createAction({
  method: 'GET',
  endpoint: `/api/user?limit=${limit}`,
  headers: {
    'app-id': DUMMY_API_APP_ID,
    'Content-Type': 'application/json',
  },
  types: [
    UserActionTypes.GET_USERS_REQUEST,
    UserActionTypes.GET_USERS_SUCCESS,
    UserActionTypes.GET_USERS_FAILURE,
  ],
});

interface IGetUsersRequestAction extends Action<typeof UserActionTypes.GET_USERS_REQUEST> {}
interface IGetUsersSuccessAction extends Action<typeof UserActionTypes.GET_USERS_SUCCESS> { payload: IGetUsersPayload }
interface IGetUsersFailureAction extends Action<typeof UserActionTypes.GET_USERS_FAILURE> { payload: ApiError }

export const getUserProfile = (id: string): RSAAAction<IUserState, IGetUsersState, unknown> => createAction({
  method: 'GET',
  endpoint: `/api/user/${id}`,
  headers: {
    'app-id': DUMMY_API_APP_ID,
    'Content-Type': 'application/json',
  },
  types: [
    UserActionTypes.GET_USER_PROFILE_REQUEST,
    UserActionTypes.GET_USER_PROFILE_SUCCESS,
    UserActionTypes.GET_USER_PROFILE_FAILURE,
  ],
});

interface IGetUserProfileRequestAction extends Action<typeof UserActionTypes.GET_USER_PROFILE_REQUEST> {}
interface IGetUserProfileSuccessAction extends Action<typeof UserActionTypes.GET_USER_PROFILE_SUCCESS> { payload: IGetUserProfilePayload }
interface IGetUserProfileFailureAction extends Action<typeof UserActionTypes.GET_USER_PROFILE_FAILURE> { payload: ApiError }

type UserActions =
  IGetUsersRequestAction | IGetUsersSuccessAction | IGetUsersFailureAction |
  IGetUserProfileRequestAction | IGetUserProfileSuccessAction | IGetUserProfileFailureAction;

export default UserActions;
