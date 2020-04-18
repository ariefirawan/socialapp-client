import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  STOP_LOADING_UI,
  MARK_NOTIFICATIONS_READ,
} from '../types';

const INITIAL_STATE = {
  authenticated: false,
  loading: false,
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
      return INITIAL_STATE;
    case SET_USER:
      return {
        authenticated: true,
        ...action.payload,
      };
    case LIKE_SCREAM:
      return {
        ...state,
        likes: [
          ...state.likes,
          {
            userHandle: state.credentials.handle,
            screamId: action.payload.screamId,
          },
        ],
      };
    case UNLIKE_SCREAM:
      return {
        ...state,
        likes: state.likes.filter(
          (like) => like.screamId !== action.payload.screamId
        ),
      };
    case STOP_LOADING_UI:
      return {
        ...state,
        loading: false,
      };
    case MARK_NOTIFICATIONS_READ:
      state.notifications.forEach((notif) => (notif.read = true));
      return {
        ...state,
      };
    default:
      return state;
  }
}
