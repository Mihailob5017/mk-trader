import React from 'react';
import './home-page.style.scss';

import ItemComponent from '../../components/item/item.component';
const HomePage = ({ items, hasToken, scoredItems, addNewlyScored }) => {
  return (
    <div className="home-page-container">
      {items.map((item, i) => (
        <ItemComponent
          scored={scoredItems[item._id]}
          addNewlyScored={addNewlyScored}
          key={i}
          item={item}
          hasToken={hasToken}
        />
      ))}
    </div>
  );
};

export default HomePage;
