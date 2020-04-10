import React, { useState } from 'react';
import InputComponent from '../input/input.component';
import CheckboxComponent from '../checkbox/checkbox.component';
import ButtonComponent from '../button/button.somponent';
import StepComponent from '../step/step.component';
import SelectComponent from '../select/select.component';
import './sign-up.style.scss';
import { asyncSignUpStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';

const SignUp = ({ asyncSignUpStart }) => {
  const avatars = [
    { name: 'Default', value: 'default' },
    { name: 'Proffesional', value: 'prof' },
    { name: 'Ocasional', value: 'ocs' },
    { name: 'Gold', value: 'gold' },
    { name: 'Premium', value: 'premium' },
  ];

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [currCity, setCurrCity] = useState('');
  const [date, setDate] = useState('');
  const [willAdd, setWilAdd] = useState(false);
  const [image, setImage] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [step, setStep] = useState(1);
  const [avatar, setAvatar] = useState('');
  const [kmsi, setKmsi] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === 'firstname') setFirstname(value);
    if (name === 'lastname') setLastname(value);
    if (name === 'username') setUsername(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'address') setAddress(value);
    if (name === 'city') setCurrCity(value);
    if (name === 'date') setDate(value);
    if (name === 'willadd') setWilAdd(!willAdd);
    if (name === 'setimg') setImage(!image);
    if (name === 'imageurl') setImageUrl(value);
    if (name === 'avatar') setAvatar(value);
    if (name === 'kmsi_signUp') setKmsi(!kmsi);
  };
  const moveStep = (val) => setStep(val);
  const handleClick = () => {
    const obj = {
      firstname,
      lastname,
      username,
      email,
      password,
      avatarType: setImage === true ? imageUrl : `avatar: ${avatar}`,
      willAddItemsToStore: willAdd,
      currentCity: currCity,
      currentAddres: address,
      dateOfBirth: date,
      cartItems: [],
    };
    asyncSignUpStart(obj, kmsi);
    setFirstname('');
    setLastname('');
    setPassword('');
    setUsername('');
    setEmail('');
    setCurrCity('');
    setAddress('');
    setDate('');
    setKmsi(false);
    setImage(false);
    setAvatar('');
    setImageUrl('');
  };

  if (step === 1)
    return (
      <div className="sign-up-container">
        <h1 className="sign-up-header">Sign Up</h1>
        <StepComponent step={1} moveStep={moveStep}>
          <InputComponent
            value={firstname}
            handleChange={handleChange}
            placeholder="Required * "
            name="firstname"
            label="First Name"
          />
          <InputComponent
            value={lastname}
            handleChange={handleChange}
            placeholder="Required * "
            name="lastname"
            label="Last Name"
          />
          <InputComponent
            value={username}
            handleChange={handleChange}
            placeholder="Required * "
            name="username"
            label="Username"
          />
          <InputComponent
            value={email}
            handleChange={handleChange}
            placeholder="Required * "
            name="email"
            label="Email:"
          />
          <InputComponent
            value={password}
            type="password"
            handleChange={handleChange}
            placeholder="Required * "
            name="password"
            label="Password:"
          />
        </StepComponent>
      </div>
    );

  if (step === 2)
    return (
      <div className="sign-up-container">
        <h1 className="sign-up-header">Sign Up</h1>
        <StepComponent step={2} moveStep={moveStep}>
          <InputComponent
            value={address}
            handleChange={handleChange}
            placeholder="Optional  "
            name="address"
            label="Address:"
          />
          <InputComponent
            value={currCity}
            handleChange={handleChange}
            placeholder="Optional * "
            name="city"
            label="Current City:"
          />
          <InputComponent
            value={date}
            handleChange={handleChange}
            placeholder="Optional * "
            name="date"
            type="date"
            label="Date of Birth::"
          />
        </StepComponent>
      </div>
    );

  if (step === 3)
    return (
      <div className="sign-up-container">
        <h1 className="sign-up-header">Sign Up</h1>
        <StepComponent step={3} moveStep={moveStep}>
          <CheckboxComponent
            value={willAdd}
            name="willadd"
            handleChange={handleChange}
          >
            I will be adding my items to the Store
          </CheckboxComponent>
          <CheckboxComponent
            value={willAdd}
            name="setimg"
            handleChange={handleChange}
          >
            I have the Url to the profile picture
          </CheckboxComponent>
          {image ? (
            <InputComponent
              label="Image Url:"
              placeholder="Optional"
              type="url"
              name="imageurl"
              value={imageUrl}
              handleChange={handleChange}
            />
          ) : (
            <SelectComponent
              message="Avatar"
              options={avatars}
              value={avatar}
              name="avatar"
              handleChange={handleChange}
            />
          )}
          <CheckboxComponent
            value={kmsi}
            name="kmsi_signUp"
            handleChange={handleChange}
          >
            Remember me
          </CheckboxComponent>
          <ButtonComponent actionHandler={handleClick}>Sign Up</ButtonComponent>
        </StepComponent>
      </div>
    );
};
const mapDispatchToProps = (dispatch) => ({
  asyncSignUpStart: (object, kmsi) => dispatch(asyncSignUpStart(object, kmsi)),
});

export default connect(null, mapDispatchToProps)(SignUp);
