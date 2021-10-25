import axios from 'axios';

import { FETCH_RECIPES, saveRecipes, getError } from 'src/actions/recipes';
import { LOGIN, finishLoading, connect, CHECK, LOGOUT } from 'src/actions/user';


const api = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          const saveRecipesAction = saveRecipes(response.data);
          store.dispatch(saveRecipesAction);
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(getError());
        });
      break;
    case LOGIN: {
      const state = store.getState();
      axios.post('http://localhost:3001/login', {
        email: state.user.email,
        password: state.user.password,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(connect());
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          store.dispatch(finishLoading());
        });
      next(action);
      break;
    }
    case CHECK:
      axios.post('http://localhost:3001/isLogged', {}, {
        withCredentials: true,
      })
        .then((response) => {
          if (response.data.logged) {

            store.dispatch(connect());
          }
        });
      break;
    case LOGOUT:
      axios.post('http://localhost:3001/logout', {}, {
        withCredentials: true,
      });
      next(action);
      break;
    default:
      next(action);
  }
};

export default api;
