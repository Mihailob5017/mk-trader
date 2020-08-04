import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

//  Helper Components
import { getItemFromStore, asyncUpdateICU } from "../../redux/item/item.action";
import { getItem, storeItems } from "../../redux/item/item.selector";
import { hasToken } from "../../redux/user/user.selector";
import { asyncGetUserProfile, addToCart } from "../../redux/user/user.action";
import { getLastParam, getInCartParam } from "../../helpers/helpers";

//  Components
import LoadingComponent from "../../components/loading/loading.component";
import ItemPage from "./item-page";

const ItemPageContainer = ({
  location,
  getItem,
  hasToken,
  findItem,
  updateICU,
  storeItems,
  asyncGetUserProfile,
  addToCart,
}) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const token =
      localStorage.getItem("auth-token") ||
      sessionStorage.getItem("auth-token");
    setToken(token);
    asyncGetUserProfile(token);
    findItem(storeItems, getLastParam(location.pathname));

    return () => {
      sessionStorage.removeItem("curr-item");
    };
  }, []);
  return getItem === null ? (
    <LoadingComponent />
  ) : (
    <ItemPage
      isInCart={getInCartParam(location.pathname)}
      hasToken={hasToken}
      token={token}
      item={getItem[0]}
      updateICU={updateICU}
      addToCart={addToCart}
    />
  );
};
const mapStateToProps = createStructuredSelector({
  getItem,
  storeItems,
  hasToken,
});
const mapDispatchToProps = (dispatch) => ({
  findItem: (store, item) => dispatch(getItemFromStore(store, item)),
  asyncGetUserProfile: (token) => dispatch(asyncGetUserProfile(token)),
  addToCart: (id) => dispatch(addToCart(id)),
  updateICU: (id) => dispatch(asyncUpdateICU(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer)
);
