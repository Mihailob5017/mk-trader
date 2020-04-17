import React, { useState } from 'react';
import ButtonComponent from '../button/button.somponent';
import './item.style.scss';
const ItemComponent = ({ item, hasToken, scored, addNewlyScored }) => {
  const { _id, name, price, type, imageUrl, score } = item;
  const [posOrNeg, setPosOrNeg] = useState(scored);
  const [scoreState, setScoreState] = useState(score);

  const scoreHandler = (newScore) => () => {
    setScoreState(scoreState + parseInt(newScore));
    setPosOrNeg(newScore);
    addNewlyScored({ [_id]: parseInt(newScore) });
  };

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
            disabled={posOrNeg == 1 ? true : false}
            className={`item-score-btn ${posOrNeg == 1 && 'btn-disabled'}`}
            onClick={scoreHandler(1)}
          >
            <i className="fas fa-angle-up"></i>
          </button>
        )}

        <h2 className="item-score-text">Rating:{scoreState}</h2>
        {hasToken && (
          <button
            disabled={posOrNeg == -1 ? true : false}
            className={`item-score-btn ${posOrNeg == -1 && 'btn-disabled'}`}
            onClick={scoreHandler(-1)}
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
