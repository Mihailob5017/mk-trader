import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/button.somponent';
import './item.style.scss';

const ItemPage = ({ token, item }) => {
  console.log(token);
  const [fullImg, setFullImg] = useState(false);
  return (
    <div className="item-page-container">
      {fullImg === true ? (
        <>
          <div className="exit-icon" onClick={() => setFullImg(false)}>
            <i className="far fa-times-circle"></i>
          </div>
          <div className="big-image-container">
            <img src={item.imageUrl} alt={item.name} />
          </div>
        </>
      ) : (
        <>
          <div className="item-page-head">
            <div className="item-img-container">
              <div className="item-overlay">
                <div
                  onClick={() => setFullImg(true)}
                  className="item-overlay-icon"
                >
                  <i className="fas fa-search-plus"></i>
                </div>
              </div>
              <img src={item.imageUrl} alt={item.name} />
            </div>
            <div className="item-basic-info">
              <h1>Name:{item.name}</h1>
              <h1>Type:{item.type}</h1>
              <h1>Price:{item.price}$</h1>
            </div>
          </div>
          <div className="item-page-body">
            <h2>About:{item.description}</h2>
            <h1>Other Users gave this item a score of : {item.score}</h1>
          </div>
          <div className="item-page-btns">
            <div className="item-page-btn">
              <Button fullWidth={true}>
                <Link to="/home">All items</Link>
              </Button>
            </div>
            {token === true && (
              <div className="item-page-btn">
                <Button fullWidth={true}>Add to cart</Button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default ItemPage;
