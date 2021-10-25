import React, { useEffect } from 'react';
import { Route, useLocation, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';
import Home from 'src/components/Home';
import Recipe from 'src/containers/Recipe';

import './style.scss';

const App = ({ fetchRecipes, loading, error, checkIsLogged }) => {
  const location = useLocation();
  useEffect(fetchRecipes, []);
  useEffect(checkIsLogged, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="yolo">
      <Nav />
      {!loading && error && (
        <Page>
          <p className="error">Une erreur s'est produite. Veuillez réessayer plus tard.</p>
        </Page>
      )}
      {!loading && !error && (
        <Switch>
          <Route path="/" exact>
            <Page>
              <Home />
            </Page>
          </Route>
          <Route path="/recipe/:slug" exact>
            <Page>
              <Recipe />
            </Page>
          </Route>
          <Route>
            <Page>
              <p>Page non trouvée</p>
            </Page>
          </Route>
        </Switch>
      )}
      {loading && (
        <Page>
          <p className="loading">Veuillez patienter. Les recettes chargent.</p>
        </Page>
      )}
    </div>
  );
};

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  fetchRecipes: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  checkIsLogged: PropTypes.func.isRequired,
};

export default App;
