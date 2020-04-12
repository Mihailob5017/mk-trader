import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home-page.style.scss';
import { appendScoredList } from '../../helpers/helpers';
import ItemComponent from '../../components/item/item.component';
const HomePage = ({ items, hasToken, scoredItems }) => {
  const [scored, addScored] = useState(scoredItems);
  const addToScored = (obj) => addScored(appendScoredList(scored, obj));

  useEffect(() => {
    return () => {
      localStorage.setItem('scored', JSON.stringify(scored));
    };
  });

  return (
    <div className="home-page-container">
      {items.map((item, i) => (
        <ItemComponent
          scored={scored[item._id]}
          addToScored={addToScored}
          key={i}
          item={item}
          hasToken={hasToken}
        />
      ))}
      <Link to="/sign">Go to</Link>
    </div>
  );
};

export default HomePage;
