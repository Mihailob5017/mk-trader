import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

//  Helper Components
import { willAddItems, profile } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { asyncGetUserProfile } from "../../redux/user/user.action";
import { setTheme, getTheme } from "../../helpers/helper-functions";

//  Componnets
import AddPage from "./add-page";
import LoadingComponent from "../../components/loading/loading.component";
import RejectComponent from "../../components/reject/reject.component";
const Axios = require("axios").default;

const AddPageContainer = ({ asyncGetUserProfile, willAddItems, profile }) => {
  const [token, setToken] = useState("");
  const addItem = async (item, token) => {
    Axios.post("https://mk-trader.herokuapp.com/store/add", item, {
      headers: { ["auth-token"]: token },
    });
  };

  useEffect(() => {
    setTheme(getTheme());
    const token =
      localStorage.getItem("auth-token") ||
      sessionStorage.getItem("auth-token");
    setToken(token);
    asyncGetUserProfile(token);
  });

  return profile === null ? (
    <LoadingComponent />
  ) : (
    <>
      {willAddItems === true ? (
        <AddPage token={token} addItem={addItem} />
      ) : (
        <RejectComponent />
      )}
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  willAddItems,
  profile,
});
const mapDispatchToProps = (dispatch) => ({
  asyncGetUserProfile: (token) => dispatch(asyncGetUserProfile(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPageContainer);
