import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
} from '../types';

const INITIAL_STATE = {
  authenticated: false,
  credentials: {},
  like: [],
  notifications: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return {
        INITIAL_STATE,
      };
    case SET_USER:
      return {
        authenticated: true,
        ...action.payload,
      };
    default:
      return state;
  }
}
