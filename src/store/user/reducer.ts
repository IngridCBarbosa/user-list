import {
  Reducer,
} from 'redux';

import {
  IUserState,
} from './types';

import UserActions from './actions';
import * as UserActionTypes from './actions/actionTypes';

export const initialState: IUserState = {
  getUsers: {
    error: null,
    loading: false,
    payload: {
      data: [],
    },
  },
  getUserProfile: {
    error: null,
    loading: false,
    payload: {
      id: '',
      title: '',
      email: '',
      phone: '',
      gender: '',
      picture: '',
      lastName: '',
      firstName: '',
      dateOfBirth: '',
      registerDate: '',
      location: {
        city: '',
        state: '',
        street: '',
        country: '',
        timezone: '',
      },
    },
  },
};

const userReducer: Reducer<IUserState, UserActions> = (state = initialState, action) => {
  switch (action.type) {
    // Get users
    case UserActionTypes.GET_USERS_REQUEST:
      return {
        ...state,
        getUsers: {
          ...state.getUsers,
          loading: true,
        },
      };

    case UserActionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        getUsers: {
          ...state.getUsers,
          loading: false,
          payload: action.payload,
        },
      };

    case UserActionTypes.GET_USERS_FAILURE:
      return {
        ...state,
        getUsers: {
          ...state.getUsers,
          loading: false,
          error: action.payload,
        },
      };

    // Get user profile
    case UserActionTypes.GET_USER_PROFILE_REQUEST:
      return {
        ...state,
        getUserProfile: {
          ...state.getUserProfile,
          loading: true,
        },
      };

    case UserActionTypes.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        getUserProfile: {
          ...state.getUserProfile,
          loading: false,
          payload: action.payload,
        },
      };

    case UserActionTypes.GET_USER_PROFILE_FAILURE:
      return {
        ...state,
        getUserProfile: {
          ...state.getUserProfile,
          loading: false,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};

export default userReducer;
