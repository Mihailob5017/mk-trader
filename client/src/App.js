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

//  Componentes
import RedirectComponent from './components/redirect/redirect-container.component';

const App = ({ getTokenFromStorage, getToken, hasToken }) => {
  useEffect(() => {
    getTokenFromStorage();
  }, []);

  return (
    <>
      {/* Header Component */}
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route
          path="/test"
          render={() =>
            hasToken ? <h2>Welcome to the page</h2> : <RedirectComponent />
          }
        />
        {/* /home ---> home page */}
        {/* /profile ---> profile page */}
        {/* /add ---> add page */}
        <Route exact path="/sign" component={SignPage} />
      </Switch>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  getTokenFromStorage: () => dispatch(getTokenFromStorage())
});
const mapStateToProps = createStructuredSelector({ hasToken, getToken });

export default connect(mapStateToProps, mapDispatchToProps)(App);
