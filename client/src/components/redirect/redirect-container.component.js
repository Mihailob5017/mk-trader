import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const RedirectComponent = () => {
  const [isRedirecting, setRedirect] = useState(false);

  return (
    <>
      {isRedirecting ? (
        <Redirect to="/sign" />
      ) : (
        <div>
          <h1>Cant go here,click to redirect</h1>
          <button onClick={() => setRedirect(true)}>click</button>
        </div>
      )}
    </>
  );
};

export default RedirectComponent;
