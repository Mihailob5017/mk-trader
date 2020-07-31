import React, { useEffect } from "react";
import SimilarItemsComponent from "./similar-items.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { getItemsAsync } from "../../redux/item/item.action";
import { storeItems } from "../../redux/item/item.selector";
import LoadingComponent from "../loading/loading.component";
const SimilarItemsContainer = ({ getItemsAsync, storeItems, itemId, type }) => {
  useEffect(() => {
    if (storeItems === null) getItemsAsync();
  });

  return (
    <div className="similar-items-container">
      <h2>You also may be interested in</h2>
      {storeItems !== null ? (
        <SimilarItemsComponent itemId={itemId} type={type} items={storeItems} />
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({ storeItems });

const mapDispatchToProps = (dispatch) => ({
  getItemsAsync: () => dispatch(getItemsAsync()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimilarItemsContainer);
