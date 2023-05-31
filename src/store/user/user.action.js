import { createAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTIONS } from './user.types';


export const setCurrentUser = (user) =>
  createAction(USER_ACTIONS.setCurrentUser, user)