import React, { useState } from 'react';
import './sign-in.style.scss';
import InputComponent from '../input/input.component';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  return (
    <div className="sign-in-container">
      <h1 className="sign-in-header">Sign In</h1>
      <InputComponent
        type="email"
        name="email"
        value={email}
        handleChange={handleChange}
        label="Email:"
      />
      <InputComponent
        type="password"
        name="password"
        value={password}
        handleChange={handleChange}
        label="Password:"
      />
    </div>
  );
};

export default SignIn;
