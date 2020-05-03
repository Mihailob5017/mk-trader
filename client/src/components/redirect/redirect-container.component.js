import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

//  Components
import RedirectChild from './redirect.component';
const RedirectComponent = ({ to, message }) => {
  const [isRedirecting, setRedirect] = useState(false);

  return (
    <>
      {isRedirecting ? (
        <Redirect to={to} />
      ) : (
        <RedirectChild handleClick={() => setRedirect(true)}>
          {message}
        </RedirectChild>
      )}
    </>
  );
};

export default RedirectComponent;
