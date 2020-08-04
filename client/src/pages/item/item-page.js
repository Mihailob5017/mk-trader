import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//  Components
import Button from "../../components/button/button.somponent";
import "./item.style.scss";
import ItemImageComponent from "../../components/item-image/item-image.component";
import SimilarItemsComponent from "../../components/similar-items/similar-items-container.component";
import { setTheme, getTheme } from "../../helpers/helpers";
const axios = require("axios").default;

const ItemPage = ({ token, item, isInCart, addToCart, updateICU }) => {
  useEffect(() => {
    setTheme(getTheme());
    updateICU(item._id);
  });
  const [fullImg, setFullImg] = useState(false);
  const [inCart, setInCart] = useState(isInCart === "t" ? true : false);
  const Add = () => {
    addToCart(item._id);
    setInCart(true);
    axios.put(
      "https://mk-trader.herokuapp.com/cart/add",
      { itemId: item._id },
      {
        headers: { ["auth-token"]: token },
      }
    );
  };
  return (
    <div className="item-page-container ">
      {fullImg === true ? (
        <>
          <div className="exit-icon" onClick={() => setFullImg(false)}>
            <i className="far fa-times-circle"></i>
          </div>

          <ItemImageComponent
            className="big-image-container"
            imageUrl={item.imageUrl}
            type={item.type}
          />
        </>
      ) : (
        <>
          <div className="item-page-head  change-bg">
            <div className="item-img-container">
              <div className="item-overlay">
                <div
                  onClick={() => setFullImg(true)}
                  className="item-overlay-icon"
                >
                  <i className="fas fa-search-plus"></i>
                </div>
              </div>
              <ItemImageComponent
                className="img"
                imageUrl={item.imageUrl}
                type={item.type}
              />
            </div>
            <div className="item-basic-info">
              <h1 className="change">Name:{item.name}</h1>
              <h1 className="change">Type:{item.type}</h1>
              <h1 className="change">Price:{item.price}$</h1>
            </div>
          </div>
          <div className="item-page-body change-bg">
            <h2 className="change">
              Desription: <br />
              {item.description}
            </h2>
            <h2 className="change">Rated by others:{item.score}</h2>
            <h2 className="change">Primary color:{item.primaryColor}</h2>
            <h2 className="change">Secendary color:{item.secendaryColor}</h2>
            <h2 className="change">Size:{item.size}</h2>
            <h2 className="change">
              Viewed by:
              {Number.isInteger(item.viewCount)
                ? item.viewCount
                : item.viewCount - 0.5}
              people
            </h2>
            <div className="item-btns">
              <Button fullWidth={true}>
                <Link to="/home">All items</Link>
              </Button>
              {token && (
                <div className="item-page-btn">
                  {inCart ? (
                    <div className="in-cart-btn">In Cart</div>
                  ) : (
                    <Button actionHandler={Add} fullWidth={true}>
                      Add to cart
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
          <SimilarItemsComponent itemId={item._id} type={item.type} />
        </>
      )}
    </div>
  );
};
export default ItemPage;
