import React, { useState } from "react";

//  Components
import "./search.style.scss";
const SearchComponent = ({ action }) => {
  const [name, setName] = useState("");
  const fireAction = () => {
    action(name);
    setName("");
  };
  return (
    <div className="search-component">
      <div className="seach-name change">Item Name:</div>
      <input
        className="search-input change-border"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Input Here"
      />
      <button onClick={fireAction} className="search-btn change change-border">
        Search <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchComponent;
