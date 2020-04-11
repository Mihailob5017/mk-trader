import React from 'react';
import './home-page.style.scss';
import ItemComponent from '../../components/item/item.component';
const HomePage = ({ items, hasToken }) => {
  return (
    <div className="home-page-container">
      {items.map((item, i) => (
        <ItemComponent key={i} item={item} hasToken={hasToken} />
      ))}
    </div>
  );
};

export default HomePage;
