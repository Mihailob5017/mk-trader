import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from '../button/button.somponent';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/user/user.action';
import './item.style.scss';
const axios = require('axios').default;
const ItemComponent = ({
  item,
  hasToken,
  token,
  scored,
  addNewlyScored,
  isInCart,
  addToCart,
}) => {
  const { _id, name, price, type, imageUrl, score } = item;
  const [posOrNeg, setPosOrNeg] = useState(scored);
  const [scoreState, setScoreState] = useState(score);
  const [inCart, setInCart] = useState(isInCart);

  const scoreHandler = (newScore) => () => {
    setScoreState(scoreState + parseInt(newScore));
    setPosOrNeg(newScore);
    addNewlyScored({ [_id]: parseInt(newScore) });
  };

  const Add = (id) => () => {
    setInCart(true);
    addToCart(id);
    axios.put(
      'http://localhost:5000/cart/add',
      { itemId: id },
      { headers: { ['auth-token']: token } }
    );
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
          <>
            {inCart ? (
              <h2 className="in-cart">In Cart</h2>
            ) : (
              <ButtonComponent actionHandler={Add(_id)} fullWidth={true}>
                Add to Cart
              </ButtonComponent>
            )}
          </>
        )}
        <ButtonComponent fullWidth={true}>
          <Link to={`/item/${isInCart ? 't' : 'f'}/${_id}`}>More Info</Link>
        </ButtonComponent>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(ItemComponent);
