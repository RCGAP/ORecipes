import { connect } from 'react-redux';

import App from 'src/components/App';
import { fetchRecipes } from 'src/actions/recipes';
import { check } from 'src/actions/user';

const mapStateToProps = (state) => ({
  loading: state.recipes.loading,
  error: state.recipes.error,
});


const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: () => {
    const action = fetchRecipes();
    dispatch(action);
  },
  checkIsLogged: () => {
    dispatch(check());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
