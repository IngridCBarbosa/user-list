import {
  ApiError,
} from 'redux-api-middleware';

export interface IUser {
  id: string;
  title: string;
  email: string;
  picture: string;
  lastName: string;
  firstName: string;
}

export interface IGetUsersPayload {
  data: Array<IUser>;
}

export interface IGetUsersState {
  loading: boolean;
  error: ApiError | null;
  payload: IGetUsersPayload;
}

export interface ILocation {
  city: string;
  state: string;
  street: string;
  country: string;
  timezone: string;
}

export interface IUserProfile extends IUser {
  phone: string;
  gender: string;
  location: ILocation;
  dateOfBirth: string;
  registerDate: string;
}

export type IGetUserProfilePayload = IUserProfile;

export interface IGetUserProfileState {
  loading: boolean;
  error: ApiError | null;
  payload: IGetUserProfilePayload;
}

export interface IUserState {
  getUsers: IGetUsersState;
  getUserProfile: IGetUserProfileState;
}
