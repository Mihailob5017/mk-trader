import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { hasToken, getToken } from './redux/user/user.selector';
import { getTokenFromStorage } from './redux/user/user.action';
import { connect } from 'react-redux';
import './App.css';

//  Pages
import StartPage from './pages/start/start-page.container';
import SignPage from './pages/sign/sign-page.container';
import AddPage from './pages/add/add-page';
import ProfilePage from './pages/profile/profile-page';

//  Componentes
import RedirectComponent from './components/redirect/redirect-container.component';
import HomePage from './pages/home/home-page';

const App = ({ getTokenFromStorage, getToken, hasToken }) => {
  useEffect(() => {
    getTokenFromStorage();
  }, []);

  return (
    <>
      {/* Header Component */}
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/home" component={HomePage} />
        <Route
          exact
          path="/profile"
          render={() =>
            hasToken ? (
              <ProfilePage />
            ) : (
              <RedirectComponent
                to="/sign"
                message="Cant access this page without an account!"
              />
            )
          }
        />
        <Route
          exact
          path="/add"
          render={() =>
            hasToken ? (
              <AddPage />
            ) : (
              <RedirectComponent
                to="/sign"
                message="Cant access this page without an account!"
              />
            )
          }
        />
        <Route exact path="/sign" component={SignPage} />
      </Switch>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getTokenFromStorage: () => dispatch(getTokenFromStorage()),
});
const mapStateToProps = createStructuredSelector({ hasToken, getToken });

export default connect(mapStateToProps, mapDispatchToProps)(App);
