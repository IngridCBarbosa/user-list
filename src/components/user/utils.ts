import {
  IUser,
} from '../../store/user/types';

export const getUserFullName = (user: IUser) => `${user.firstName} ${user.lastName}`;
