import React, { useState } from 'react';
import { connect } from 'react-redux';

//  Components
import InputComponent from '../input/input.component';
import ButtonComponent from '../button/button.somponent';
import CheckboxComponent from '../checkbox/checkbox.component';
import { asyncSignInStart } from '../../redux/user/user.action';
import './sign-in.style.scss';

const SignIn = ({ signIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [kmsi, setKmsi] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'kmsi') setKmsi(!kmsi);
  };

  const handleClick = () => {
    if (email === '' || password === '') {
      alert('You need to enter something');
      return;
    }
    signIn({ email, password, kmsi });
    setEmail('');
    setPassword('');
    setKmsi('');
  };

  return (
    <div className="sign-in-container">
      <InputComponent
        placeholder="Email"
        type="email"
        name="email"
        value={email}
        handleChange={handleChange}
        label="User Email:"
      />
      <InputComponent
        placeholder="Password"
        type="password"
        name="password"
        value={password}
        handleChange={handleChange}
        label="User Password:"
      />
      <CheckboxComponent value={kmsi} name="kmsi" handleChange={handleChange}>
        Remember me
      </CheckboxComponent>
      <ButtonComponent actionHandler={handleClick}>Sign In</ButtonComponent>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (data) => dispatch(asyncSignInStart(data)),
});

export default connect(null, mapDispatchToProps)(SignIn);
