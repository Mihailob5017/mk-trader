import React, { useState } from 'react';
import ButtonComponent from '../button/button.somponent';
import './item.style.scss';
const ItemComponent = ({ addToScored, item, hasToken, scored }) => {
  const { _id, name, price, type, imageUrl, score } = item;
  return (
    <div className="item-container">
      <div className="item-image">
        <img src={imageUrl} />
      </div>
      <div className="item-info">
        <h2 className="item-name">Name: {name}</h2>
        <h2 className="item-type">Type: {type}</h2>
        <h2 className="item-price">Price: {price}$</h2>
      </div>

      <div className="item-score">
        {hasToken && (
          <button
            className="item-score-btn"
            onClick={() => addToScored({ itemId: _id, scored: 1 })}
          >
            <i className="fas fa-angle-up"></i>
          </button>
        )}

        <h2 className="item-score-text">Rating:{score}</h2>
        {hasToken && (
          <button
            className="item-score-btn"
            onClick={() => addToScored({ itemId: item._id, scored: -1 })}
          >
            <i className="fas fa-angle-down"></i>
          </button>
        )}
      </div>
      <div className="item-btns">
        {hasToken && (
          <ButtonComponent fullWidth={true}>Add to Cart</ButtonComponent>
        )}
        <ButtonComponent fullWidth={true}>More Info</ButtonComponent>
      </div>
    </div>
  );
};

export default ItemComponent;
