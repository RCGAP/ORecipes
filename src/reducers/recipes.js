import { SAVE_RECIPES, GET_ERROR } from 'src/actions/recipes';

export const initialState = {
  list: [],
  loading: true,
  error: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        list: action.recipes,
        loading: false,
      };
    case GET_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
