import React, { useState } from 'react';

//  Components
import './search.style.scss';
const SearchComponent = ({ action }) => {
  const [name, setName] = useState('');
  const fireAction = () => {
    action(name);
    setName('');
  };
  return (
    <div className="search-component">
      <div className="seach-name">Item Name:</div>
      <input
        className="search-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Input Here"
      />
      <button onClick={fireAction} className="search-btn">
        Search <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchComponent;
