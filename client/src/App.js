import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { hasToken, getToken } from "./redux/user/user.selector";
import { getTokenFromStorage } from "./redux/user/user.action";
import { connect } from "react-redux";
import "./App.scss";

//  Pages
import HomePage from "./pages/home/home-page.container";
import StartPage from "./pages/start/start-page.container";
import SignPage from "./pages/sign/sign-page.container";
import AddPage from "./pages/add/add-page.container";
import ProfilePage from "./pages/profile/profile-page.container";
import SettingsPage from "./pages/settings/settings-page.container";
import ItemPageContainer from "./pages/item/item-page.container";

//  Componentes
import RedirectComponent from "./components/redirect/redirect-container.component";
import { getScoredItemsAsync } from "./redux/item/item.action";
import HeaderComponent from "./components/header/header.component";
import FooterComponent from "./components/footer/footer.component";
import { getTheme, setTheme } from "./helpers/helpers";

const App = ({ getTokenFromStorage, hasToken }) => {
  useEffect(() => {
    getTokenFromStorage();

    setTheme(getTheme());
  }, []);

  return (
    <>
      <HeaderComponent />
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
        <Route
          exact
          path="/sign"
          render={() => (hasToken ? <Redirect to="/" /> : <SignPage />)}
        />
        <Route
          exact
          path="/settings"
          render={() =>
            hasToken ? (
              <SettingsPage />
            ) : (
              <RedirectComponent
                to="/sign"
                message="Cant access this page without an account!"
              />
            )
          }
        />
        <Route path="/item/" component={ItemPageContainer} />
      </Switch>
      <FooterComponent />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getTokenFromStorage: () => dispatch(getTokenFromStorage()),
  getScoredItemsAsync: (token) => dispatch(getScoredItemsAsync(token)),
});
const mapStateToProps = createStructuredSelector({ hasToken, getToken });

export default connect(mapStateToProps, mapDispatchToProps)(App);
