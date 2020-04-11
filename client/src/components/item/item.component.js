import React from 'react';
import ButtonComponent from '../button/button.somponent';
import './item.style.scss';
const ItemComponent = ({ item, hasToken }) => {
  console.log(item);
  const { name, price, type, imageUrl, score } = item;
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
          <h2>
            <i class="fas fa-angle-up"></i>
          </h2>
        )}

        <h2 className="item-score-text">Rating:{score}</h2>
        {hasToken && (
          <h2>
            <i class="fas fa-angle-down"></i>
          </h2>
        )}
      </div>
      <div className="item-btns">
        {hasToken && (
          <ButtonComponent fullWidth={true}>Add to Cart</ButtonComponent>
        ) }
        <ButtonComponent fullWidth={true}>More Info</ButtonComponent>
      </div>
    </div>
  );
};

export default ItemComponent;
