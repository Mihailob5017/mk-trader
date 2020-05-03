import React from 'react';

//  Components
import './loading.style.scss';
const LoadingComponent = () => {
  return (
    <div className="loading-container">
      <div className="loading-logo">
        <div className="loading-circle"></div>
        <h1 className="loading-text">Loading ...</h1>
      </div>
    </div>
  );
};

export default LoadingComponent;
