import React from 'react';
import { Link } from 'react-router-dom';
import './empty.style.scss';
const EmptyComponent = () => {
  return (
    <div className="empty-container">
      <div className="empty-center">
        <h2> It appears that there are no items of this sort in the store!</h2>
        <h2>Feel free to add Items of your own here!</h2>
        <div className="empty-btns">
          <div className="empty-btn">
            <Link to="/add">Add Item</Link>
          </div>
          <div className="empty-btn">
            <Link to="/">Go Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyComponent;
