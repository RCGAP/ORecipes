// ici je crée un second reducer qui gère toutes les infos liées au user
import {
  CHANGE_VALUE,
  LOGIN,
  FINISH_LOADING,
  CONNECT,
  LOGOUT,
} from 'src/actions/user';

export const initialState = {
  email: '',
  password: '',
  logged: false,
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };
    case CONNECT:
      return {
        ...state,
        logged: true,
      };
    case LOGOUT:
      return {
        ...state,
        logged: false,
        email: '',
        password: '',
      };
    default:
      return state;
  }
};

export default reducer;
